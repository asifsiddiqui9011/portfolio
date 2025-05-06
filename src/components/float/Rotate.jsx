import React, { useState, useRef, useEffect } from "react";
import Image from "../../assets/p-ring.png";

const Rotate = () => {
    const laserOffset = 1000;
    const baseLaserPositions = [
        { factorTop: -1.5, factorLeft: 0, offset: laserOffset },
        { factorTop: -0.5, factorLeft: 0, offset: laserOffset },
        { factorTop: 0.5, factorLeft: 0, offset: laserOffset },
        { factorTop: 1.5, factorLeft: 0, offset: laserOffset },
        { factorTop: 0, factorLeft: -1.5, offset: laserOffset },
        { factorTop: 0, factorLeft: -0.5, offset: laserOffset },
        { factorTop: 0, factorLeft: 0.5, offset: laserOffset },
        { factorTop: 0, factorLeft: 1.5, offset: laserOffset },
    ];
    const laserColors = [
        "#00FFFF",
        "#ff2424",
        "#0000FF",
        "#FF00c8",
        "#FF00FF",
        "#00FFFF",
    ];

    const [active, setActive] = useState(false);
    const [lasers, setLasers] = useState([]);
    const [position, setPosition] = useState({ x: 100, y: 200 });
    const dragStartRef = useRef({ mouseX: 0, mouseY: 0, posX: 0, posY: 0 });
    const draggingRef = useRef(false);

    // Set initial position. Here we use window dimensions to calculate 
    // left centered and top such that the bottom equals 1200px from the viewport bottom.
    useEffect(() => {
        const width = 100; // element width
        const height = 100; // element height
        const initialX = window.innerWidth / 2 - width / 2 - 300;
        // The top is calculated from the viewport height minus 1200px and subtracting element height.
        const initialY = window.innerHeight + 1800 - height;
        setPosition({ x: initialX, y: initialY });
    }, []);

    const generateLasers = () => {
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;
        const laserRadius = 75; // Half of 150px for clamping
        const centerX = winWidth / 2;
        const centerY = winHeight / 2;
  
        return baseLaserPositions.map(({ factorTop, factorLeft, offset }) => {
            // Generate a random offset between -50 and 50
            const randomOffsetTop = Math.random() * 100 - 50;
            const randomOffsetLeft = Math.random() * 100 - 50;
  
            let posX = centerX + factorLeft * offset + randomOffsetLeft;
            let posY = centerY + factorTop * offset + randomOffsetTop;
  
            // Clamp positions so that lasers stay fully within the viewport.
            posX = Math.round(Math.max(laserRadius, Math.min(posX, winWidth - laserRadius)));
            posY = Math.round(Math.max(laserRadius, Math.min(posY, winHeight - laserRadius)));
  
            return {
                top: `${posY}px`,
                left: `${posX}px`,
                color: laserColors[Math.floor(Math.random() * laserColors.length)],
            };
        });
    };

    const handleToggle = () => {
        setActive((prevActive) => {
            const newActive = !prevActive;
            if (newActive) {
                setLasers(generateLasers());
            }
            return newActive;
        });
    };

    const handleMouseDown = (e) => {
        dragStartRef.current = {
            mouseX: e.clientX,
            mouseY: e.clientY,
            posX: position.x,
            posY: position.y,
        };
        draggingRef.current = false;
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e) => {
        const deltaX = e.clientX - dragStartRef.current.mouseX;
        const deltaY = e.clientY - dragStartRef.current.mouseY;
        if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
            draggingRef.current = true;
        }
        setPosition({
            x: dragStartRef.current.posX + deltaX,
            y: dragStartRef.current.posY + deltaY,
        });
    };

    const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        // If there was no significant drag, consider it a click to toggle lasers.
        if (!draggingRef.current) {
            handleToggle();
        }
    };

    return (
        <div
            className={`rotate-wrapper ${active ? "active" : ""}`}
            onMouseDown={handleMouseDown}
            style={{
                position: "absolute",
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: "100px",
                height: "100px",
                cursor: "pointer",
            }}
        >
            <style>
                {`
                    .rotate-wrapper .rotate-image {
                        width: 100%;
                        height: 100%;
                        animation: rotate 10s linear infinite;
                        transition: transform 0.3s ease-out;
                        position: relative;
                        z-index: 1;
                    }
                    
                    .rotate-wrapper.active .rotate-image {
                        transform: scale(1.05);
                    }

                    .laser {
                        position: absolute;
                        width: 150px;
                        height: 150px;
                        background: radial-gradient(circle, var(--cyberColor) 0%, transparent 10%);
                        transform: translate(-50%, -50%);
                        pointer-events: none;
                        animation: laser 1s ease-out infinite;
                        z-index: 0;
                        opacity: 1;
                    }

                    .laser:nth-of-type(1) {
                        animation-delay: 0s;
                    }
                    .laser:nth-of-type(2) {
                        animation-delay: 0.3s;
                    }
                    .laser:nth-of-type(3) {
                        animation-delay: 0.6s;
                    }
                    .laser:nth-of-type(4) {
                        animation-delay: 0.9s;
                    }

                    @keyframes rotate {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }

                    @keyframes laser {
                        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                        50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
                        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                    }
                `}
            </style>

            {active &&
                lasers.map((laser, index) => (
                    <span
                        key={index}
                        className="laser"
                        style={{
                            top: laser.top,
                            left: laser.left,
                            "--cyberColor": laser.color,
                        }}
                    />
                ))}

            <img src={Image} alt="Rotating object" className="rotate-image" />
        </div>
    );
};

export default Rotate;
