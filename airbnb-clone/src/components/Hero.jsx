import photoGrid from '../../src/images/photo-grid.png'

export const Hero = () => {
    return (
        <section className='hero'>
            <img src={photoGrid} alt="bunch of random pictures" className='hero--photo' />
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by
            one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}
