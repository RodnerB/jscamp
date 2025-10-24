function JobListing({titulo, empresa, descripcion}){
    return (
        <article className="job-listing-card">
            <div>
                <h3>{titulo}</h3>
                <small>{empresa}</small>
                <p>{descripcion}</p>
            </div>
            <button className="button-apply-job">Aplicar</button>
        </article>
    )
} export default JobListing;