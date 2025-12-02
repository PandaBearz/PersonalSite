import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Your Name - Personal Website</title>
        <meta name="description" content="Welcome to my personal website. Discover my work, skills, and get in touch." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>Hello, I&apos;m <span className={styles.highlight}>Your Name</span></h1>
        <p className={styles.heroSubtitle}>Developer | Designer | Creator</p>
        <a href="#about" className={styles.ctaButton}>Learn More About Me</a>
      </header>

      <main className={styles.main}>
        {/* About Section */}
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.sectionText}>
            Welcome to my personal website! I&apos;m passionate about building great things
            with technology. I love creating innovative solutions and bringing ideas to life
            through code. When I&apos;m not coding, you can find me exploring new technologies
            and learning new skills.
          </p>
        </section>

        {/* Skills Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <h3>Frontend</h3>
              <p>React, Next.js, HTML, CSS, JavaScript</p>
            </div>
            <div className={styles.skillCard}>
              <h3>Backend</h3>
              <p>Node.js, Python, APIs, Databases</p>
            </div>
            <div className={styles.skillCard}>
              <h3>Tools</h3>
              <p>Git, VS Code, Docker, CI/CD</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.sectionText}>
            I&apos;m always open to new opportunities and collaborations.
            Feel free to reach out!
          </p>
          <div className={styles.contactLinks}>
            <a href="mailto:your.email@example.com" className={styles.contactLink}>Email</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}
