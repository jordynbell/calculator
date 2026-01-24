type DisplayProps = {
    value: string
}

export default function Display({ value }: DisplayProps) {
    return (
        <div
            style={{
                padding: '16px',
                fontSize: '24px',
                border: '1px solid #ccc',
                marginBottom: '12px',
                textAlign: 'right'
            }}>
            {value}
        </div>
    )
}