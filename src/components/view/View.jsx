function View () {
    return (
        <div className="card">
        <div className="linha">
            <div className="coluna">
                <strong>Saldo Total:</strong>
            </div>
            <div className="coluna">
                <strong>Saldo do Período:</strong>
            </div>
        </div>
        <div className="linha">
            <div className="coluna">
                <span>Dados</span>
            </div>
            <div className="coluna">
                <span>Valência</span>
            </div>
            <div className="coluna">
                <span>Tipo</span>
            </div>
            <div className="coluna">
                <span>Nome do Operador</span>
            </div>
        </div>
    </div>
        
        )
}

export default View