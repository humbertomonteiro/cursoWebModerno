export default function Jsx() {
    const a = 1
    const b = 3
    const titulo = <h1>Título</h1>
    
    return (
        <div>
            <h1>JSX é um conceito geral</h1>
            {a * b}

            {titulo}

        </div>
    )
}