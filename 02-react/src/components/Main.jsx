import JobListing from './jobListing'
import { useState, useEffect } from 'react'
import JobSearch from './JobSearch'

function Main(){
    const [jobs, setJobs] = useState([])
    const [filteredJobs, setFilteredJobs] = useState(jobs)

    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => {
            setJobs(data)
            setFilteredJobs(data)
        })
    }, [])

    const handleLocationChange = (location) => {
        if (location === '') {
            setFilteredJobs(jobs)
        } else {
            const filtrados = jobs.filter(job => job.ubicacion.toLowerCase() === location.toLowerCase())
            setFilteredJobs(filtrados)
        }
    }

    return (
        <main>
            <JobSearch onLocationChange={handleLocationChange}/>

            <section>
            <h2>Resultados de búsqueda</h2>

            <div className="jobs-listings">
                {filteredJobs.map((job) => {
                const { id, titulo, empresa, descripcion } = job
                return (
                <JobListing
                    key={id}
                    titulo={titulo}
                    empresa={empresa}
                    descripcion={descripcion}
                />
                )
            })}
            </div>

            <nav className="pagination">
                <a href="#"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 6l-6 6l6 6" />
                </svg></a>
                <a className="is-active" href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                </svg></a>
            </nav>
            </section>
        </main>
    )
} export default Main;