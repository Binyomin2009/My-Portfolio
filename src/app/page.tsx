import About from '@/components/about'
import Hero from '@/components/hero'
import MyLanguages from '@/components/my-lang'
import MyProjects from '@/components/projects'
  const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <MyLanguages/>
      <MyProjects/>
    </div>
  )
}

export default Home
