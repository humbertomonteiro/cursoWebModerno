import './Header.css'

export default props => 
    <header className='header d-nome d-sn-flex flex-column'>
        <h1 className='mt-3'>
            <i className={`fa fa-${props.icon}`}> {props.title} </i>
        </h1>
        <p className="lead text-muted"> {props.subtitle} </p>
    </header>