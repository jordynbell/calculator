import { useCallback, useEffect, useState } from "react";
import Display from "../components/Display";
import Keypad from "../components/Keypad";
import { calculateApi } from "../services/calculateApi";

type Op = "+" | "-" | "*" | "/" | "^" | null;

export default function CalculatorPage() {
    const [display, setDisplay] = useState("0");
    const [a, setA] = useState<number | null>(null);
    const [op, setOp] = useState<Op>(null);
    const [isTypingNew, setIsTypingNew] = useState(true);

    const appendDigit = useCallback((d: string) => {
        setDisplay((prev) => {
            if (isTypingNew) {
                setIsTypingNew(false);
                return d === "." ? "0." : d;
            }

            if (d === "." && prev.includes(".")) return prev;
            return prev === "0" && d !== "." ? d : prev + d;
        });
    }, [isTypingNew]);

    const clearAll = useCallback(() => {
        setDisplay("0");
        setA(null);
        setOp(null);
        setIsTypingNew(true);
    }, []);

    const runEquals = useCallback(async () => {
        try {
            const current = Number(display);

            if (a === null || op === null) return;

            let result: number;

            if (op === "+") result = await calculateApi.add(a, current);
            else if (op === "-") result = await calculateApi.subtract(a, current);
            else if (op === "*") result = await calculateApi.multiply(a, current);
            else if (op === "/") result = await calculateApi.divide(a, current);
            else result = await calculateApi.power(a, current);

            setDisplay(result.toString());
            setA(null);
            setOp(null);
            setIsTypingNew(true);
        } catch (err) {
            const msg = err instanceof Error ? err.message : "Error";
            setDisplay(msg);
            setA(null);
            setOp(null);
            setIsTypingNew(true);
        }
    }, [a, op, display]);

    const handlePress = useCallback(async (value: string) => {
        if ("0123456789.".includes(value)) {
            appendDigit(value);
            return;
        }

        if (value === "C") {
            clearAll();
            return;
        }

        if (value === "=") {
            await runEquals();
            return;
        }

        if (value === "+" || value === "-" || value === "*" || value === "/" || value === "^") {
            setA(Number(display));
            setOp(value as Op);
            setIsTypingNew(true);
            return;
        }
    }, [appendDigit, clearAll, runEquals, display]);

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            const key = e.key;

            // digits + decimal
            if ("0123456789.".includes(key)) {
                void handlePress(key);
                return;
            }

            // operators
            if (key === "+" || key === "-" || key === "*" || key === "/" || key === "^") {
                void handlePress(key);
                return;
            }

            // equals
            if (key === "Enter" || key === "=") {
                e.preventDefault();
                void handlePress("=");
                return;
            }

            // clear
            if (key === "Escape") {
                void handlePress("C");
                return;
            }

            // backspace
            if (key === "Backspace") {
                setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
                setIsTypingNew(false);
                return;
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handlePress]);

    return (
        <div
            style={{
                width: "260px",
                padding: "16px",
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: "12px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            }}
        >
            <Display value={display} />
            <Keypad onPress={handlePress} />
        </div>
    );
}