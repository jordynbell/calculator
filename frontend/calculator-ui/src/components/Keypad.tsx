import Button from './Button'

type KeypadProps = {
    onPress: (value:string) => void
}

const keys = [
    "C", "^", "/", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", "."
];

export default function Keypad({ onPress }: KeypadProps) {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '8px'
            }}
        >
            {keys.map(key => (
                <Button
                    key={key}
                    label={key}
                    onClick={() => onPress(key)}
                />
            ))}
        </div>
    )
}