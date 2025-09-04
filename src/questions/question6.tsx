import { useEffect, useRef } from "react";
import { RotateCcw } from "lucide-react";
import "../App.css";

export const Question6 = () => {
    const achillesRef = useRef<HTMLDivElement>(null);
    const tortoiseRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);


    const startAnimation = () => {
        let achillesX = 0;
        let tortoiseX = 200;

        const animate = () => {
            // Achilles moves a fraction closer to tortoise
            achillesX += (tortoiseX - achillesX) * 0.05;

            // Tortoise moves slowly forward
            tortoiseX += 0.5;

            if (achillesRef.current) {
                achillesRef.current.style.transform = `translateX(${achillesX}px)`;
            }
            if (tortoiseRef.current) {
                tortoiseRef.current.style.transform = `translateX(${tortoiseX}px)`;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();
    };

    const stopAnimation = () => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }
    };

    const restartAnimation = () => {
        stopAnimation();

        // Reset positions instantly
        if (achillesRef.current) {
            achillesRef.current.style.transform = `translateX(0px)`;
        }
        if (tortoiseRef.current) {
            tortoiseRef.current.style.transform = `translateX(200px)`;
        }

        // Restart after short delay
        setTimeout(() => startAnimation(), 200);
    };

    useEffect(() => {
        startAnimation();
        return () => stopAnimation();
    }, []);

    return (
        <div className="zeno-container">
            <h3>Zeno's Paradox: Achilles and the Tortoise</h3>
            <div className="track">
                <div ref={achillesRef} className="achilles-circle"></div>
                <div ref={tortoiseRef} className="tortoise-circle"></div>
            </div>

            <button
                onClick={restartAnimation}
                className="zeno-icon-btn"
            >
                <RotateCcw size={22} />
            </button>
        </div>
    );
};
