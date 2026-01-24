import CalculatorPage from './pages/CalculatorPage'

export default function App() {
    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid black'
            }}
        >
            <CalculatorPage />
        </div>
    )
}