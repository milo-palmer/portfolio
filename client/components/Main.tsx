import { Canvas } from '@react-three/fiber'
import ReactLogo from './ReactLogo'

function Main() {
  return (
    <section className="grid main">
      <div className="center-text">
        <h2>Hi I&apos;m Milo</h2>
        <p>
          I am a software developer, I love to learn and grow and have a little
          sideproject to bring more 3D to the world of websites
        </p>
        <div>
          <a
            href="https://github.com/milo-palmer"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="images/github.svg"
              style={{ width: '50px', height: '50px', marginRight: '20px' }}
              alt="github logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/milo-palmer-962081256/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="images/linkedin.svg"
              style={{ width: '50px', height: '50px' }}
              alt="linkedin logo"
            />
          </a>
        </div>
      </div>
      <div style={{ height: '60vh' }}>
        <Canvas>
          <ReactLogo />
        </Canvas>
      </div>
    </section>
  )
}

export default Main
