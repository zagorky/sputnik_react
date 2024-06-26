import './AboutUs.css'






function AboutUs () {
    return (
<section className="video" id='about_us'>
    <div className="about-us-video">
        <iframe width="100%" height='100%' src="https://www.youtube.com/embed/b2tsexb8V4k?si=Jzl75xgDzN4raVC7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div className="about-us-content">
        <h2>Кто мы</h2>
            <p><strong>SPUTNIK </strong> — универсальные и сдержанные вещи, которые дополняют, а не перебивают. Они не выходят на первый план; 
        их задача — раскрыть образ своего владельца. Ведь основное для нас — личность человека и вещи, которыми он 
        наполняет наши рюкзаки и сумки.</p>
            <p>В течение 5 лет мы разрабатываем новые модели и сотрудничаем с международными и локальными брендами.</p>
        </div>
</section>
    )
}
export default AboutUs