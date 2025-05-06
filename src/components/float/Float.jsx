// import React, { useState, useEffect, useRef } from 'react';
// import imageSrc from '../../assets/pfloatmini.png';

// const Float = ({ initialPosition = { x: 100, y: 100 } }) => {
//     const [position, setPosition] = useState(initialPosition);
//     const [velocity, setVelocity] = useState({ x: 1, y: 1 });
//     const [isDragging, setIsDragging] = useState(false);
//     const [offset, setOffset] = useState({ x: 0, y: 0 });
//     const containerRef = useRef(null);

//     const handleMouseDown = (e) => {
//         setIsDragging(true);
//         setOffset({
//             x: e.clientX - position.x,
//             y: e.clientY - position.y,
//         });
//     };

//     const handleMouseMove = (e) => {
//         if (!isDragging) return;
//         setPosition({
//             x: e.clientX - offset.x,
//             y: e.clientY - offset.y,
//         });
//     };

//     const handleMouseUp = () => {
//         setIsDragging(false);
//     };

//     // Manage dragging event listeners
//     useEffect(() => {
//         if (isDragging) {
//             window.addEventListener('mousemove', handleMouseMove);
//             window.addEventListener('mouseup', handleMouseUp);
//         } else {
//             window.removeEventListener('mousemove', handleMouseMove);
//             window.removeEventListener('mouseup', handleMouseUp);
//         }
//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//             window.removeEventListener('mouseup', handleMouseUp);
//         };
//     }, [isDragging, offset]);

//     // Continuous movement with bouncing when not dragging
//     useEffect(() => {
//         if (!isDragging) {
//             let animationFrameId;
//             // Capture initial position and velocity values for the effect run
//             let curPos = position;
//             let curVel = velocity;
//             const move = () => {
//                 let newX = curPos.x + curVel.x;
//                 let newY = curPos.y + curVel.y;
//                 const container = containerRef.current;
//                 // Fallback container size if ref is not yet available
//                 const containerWidth = container ? container.offsetWidth : 50;
//                 const containerHeight = container ? container.offsetHeight : 50;
                
//                 // Bounce horizontally if hitting left/right walls
//                 if (newX <= 0 || newX + containerWidth >= window.innerWidth) {
//                     curVel.x = -curVel.x;
//                     newX = curPos.x + curVel.x;
//                 }
//                 // Bounce vertically if hitting top/bottom walls
//                 if (newY <= 0 || newY + containerHeight >= window.innerHeight) {
//                     curVel.y = -curVel.y;
//                     newY = curPos.y + curVel.y;
//                 }
                
//                 curPos = { x: newX, y: newY };
//                 setPosition(curPos);
//                 setVelocity({ ...curVel });
//                 animationFrameId = requestAnimationFrame(move);
//             };
//             animationFrameId = requestAnimationFrame(move);
//             return () => cancelAnimationFrame(animationFrameId);
//         }
//     }, [isDragging]);

//     const containerStyle = {
//         position: 'fixed',
//         left: position.x,
//         top: position.y,
//         cursor: isDragging ? 'grabbing' : 'grab',
//         zIndex: 1000,
//     };

//     const imageStyle = {
//         animation: 'floatAnimation 4s ease-in-out infinite',
//         userSelect: 'none',
//     };

//     return (
//         <>
//             <div ref={containerRef} style={containerStyle} onMouseDown={handleMouseDown}>
//                 <img src={imageSrc} alt="Floating Object" style={imageStyle} draggable="false" />
//             </div>
//             <style>
//                 {`
//                     @keyframes floatAnimation {
//                         0% { transform: translateY(0px); }
//                         50% { transform: translateY(-10px); }
//                         100% { transform: translateY(0px); }
//                     }
//                 `}
//             </style>
//         </>
//     );
// };

// export default Float;




import React, { useState, useEffect, useRef } from 'react';
import imageSrc from '../../assets/pfloat.png';

const Float = ({ initialPosition = { x: 100, y: 100 } }) => {
    const [position, setPosition] = useState(initialPosition);
    const [velocity, setVelocity] = useState({ x: 1, y: 1 });
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);
    const [exploded, setExploded] = useState(false);
    const [explosionData, setExplosionData] = useState(null);
    const [miniFloats, setMiniFloats] = useState([]);

    const containerRef = useRef(null);
    const dragTimerRef = useRef(null);
    const intervalRef = useRef(null);
    const explosionTimeoutRef = useRef(null);

    const handleMouseDown = (e) => {
        if (exploded) return; // Disable interaction while explosion effect is active
        setIsDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
        // Start timer: after 500ms of dragging, begin increasing size
        dragTimerRef.current = setTimeout(() => {
            intervalRef.current = setInterval(() => {
                setScale((prevScale) => {
                    let newScale = prevScale + 0.01;
                    if (newScale >= 2) {
                        newScale = 2;
                        if (intervalRef.current) {
                            clearInterval(intervalRef.current);
                            intervalRef.current = null;
                        }
                        // Generate explosion fragments (8 parts)
                        const parts = Array.from({ length: 8 }, (_, i) => {
                            const angle = (i * (360 / 8)) + (Math.random() * 20 - 10);
                            const rad = angle * (Math.PI / 180);
                            return {
                                offsetX: Math.cos(rad) * 100,
                                offsetY: Math.sin(rad) * 100,
                            };
                        });
                        setExplosionData(parts);
                        setExploded(true);
                        // After explosion effect (0.5s), add two mini objects and reset scale
                        explosionTimeoutRef.current = setTimeout(() => {
                            setMiniFloats((prev) => [
                                ...prev,
                                {
                                    position: { x: position.x - 20, y: position.y - 20 },
                                    velocity: { x: 1, y: 1 },
                                },
                                {
                                    position: { x: position.x + 20, y: position.y + 20 },
                                    velocity: { x: -1, y: -1 },
                                },
                            ]);
                            setExploded(false);
                            setScale(1);
                        }, 1000);
                    }
                    return newScale;
                });
            }, 16); // ~60 fps
        }, 500);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        setPosition({
            x: e.clientX - offset.x,
            y: e.clientY - offset.y,
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (dragTimerRef.current) {
            clearTimeout(dragTimerRef.current);
            dragTimerRef.current = null;
        }
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            if (!exploded) setScale(1);
        }
    };

    // Manage dragging event listeners
    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, offset, exploded]);

    // Continuous movement for the big object (when not dragging)
    useEffect(() => {
        if (!isDragging) {
            let animationFrameId;
            let curPos = position;
            let curVel = velocity;
            const move = () => {
                let newX = curPos.x + curVel.x;
                let newY = curPos.y + curVel.y;
                const container = containerRef.current;
                const containerWidth = container ? container.offsetWidth : 50;
                const containerHeight = container ? container.offsetHeight : 50;

                if (newX <= 0 || newX + containerWidth >= window.innerWidth) {
                    curVel.x = -curVel.x;
                    newX = curPos.x + curVel.x;
                }
                if (newY <= 0 || newY + containerHeight >= window.innerHeight) {
                    curVel.y = -curVel.y;
                    newY = curPos.y + curVel.y;
                }

                curPos = { x: newX, y: newY };
                setPosition(curPos);
                setVelocity({ ...curVel });
                animationFrameId = requestAnimationFrame(move);
            };
            animationFrameId = requestAnimationFrame(move);
            return () => cancelAnimationFrame(animationFrameId);
        }
    }, [isDragging, position]);

    // Animate mini floating objects
    useEffect(() => {
        if (miniFloats.length === 0) return;
        let animationFrameId;
        const moveMiniFloats = () => {
            setMiniFloats((floats) =>
                floats.map((float) => {
                    const { position: pos, velocity: vel } = float;
                    let newX = pos.x + vel.x;
                    let newY = pos.y + vel.y;
                    const width = 25;
                    const height = 25;
                    if (newX <= 0 || newX + width >= window.innerWidth) {
                        vel.x = -vel.x;
                        newX = pos.x + vel.x;
                    }
                    if (newY <= 0 || newY + height >= window.innerHeight) {
                        vel.y = -vel.y;
                        newY = pos.y + vel.y;
                    }
                    return { position: { x: newX, y: newY }, velocity: { ...vel } };
                })
            );
            animationFrameId = requestAnimationFrame(moveMiniFloats);
        };
        animationFrameId = requestAnimationFrame(moveMiniFloats);
        return () => cancelAnimationFrame(animationFrameId);
    }, [miniFloats]);

    const containerStyle = {
        position: 'fixed',
        left: position.x,
        top: position.y,
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: 1000,
        transform: `scale(${scale})`,
    };

    const imageStyle = {
        animation: 'floatAnimation 4s ease-in-out infinite',
        userSelect: 'none',
    };

    return (
        <>
            {!exploded && (
                <div ref={containerRef} style={containerStyle} onMouseDown={handleMouseDown}>
                    <img
                        src={imageSrc}
                        alt="Floating Object"
                        style={{ ...imageStyle, width: '200px', height: '200px' }}
                        draggable="false"
                    />
                </div>
            )}
            {exploded && (
                <div
                    style={{
                        position: 'fixed',
                        left: position.x,
                        top: position.y,
                        zIndex: 1100,
                        transform: 'scale(2)',
                    }}
                >
                    {explosionData &&
                        explosionData.map((part, index) => (
                            <img
                                key={index}
                                src={imageSrc}
                                alt="Fragment"
                                style={{
                                    position: 'absolute',
                                    width: '25px',
                                    height: '25px',
                                    top: 0,
                                    left: 0,
                                    animation: 'explode 0.8s ease-out forwards',
                                    '--tx': `${part.offsetX}px`,
                                    '--ty': `${part.offsetY}px`,
                                }}
                            />
                        ))}
                </div>
            )}
            {miniFloats.map((float, index) => (
                <div
                    key={index}
                    style={{
                        position: 'fixed',
                        left: float.position.x,
                        top: float.position.y,
                        zIndex: 1000,
                    }}
                >
                    <img
                        src={imageSrc}
                        alt="Floating Object"
                        style={{
                            animation: 'floatAnimation 4s ease-in-out infinite',
                            userSelect: 'none',
                            width: '50px',
                            height: '50px',
                        }}
                        draggable="false"
                    />
                </div>
            ))}
            <style>
                {`
                    @keyframes floatAnimation {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                        100% { transform: translateY(0px); }
                    }
                    @keyframes explode {
                        from {
                            opacity: 1;
                            transform: translate(0, 0);
                        }
                        to {
                            opacity: 0;
                            transform: translate(var(--tx), var(--ty));
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Float;
