type ButtonProps = {
    label: string
    onClick: () => void
}

export default function Button({ label, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            style={
                {
                    padding: '16px',
                    fontSize: '14px',
                    cursor: 'pointer'
                }
            }
        >
            {label}
        </button>
    )
}