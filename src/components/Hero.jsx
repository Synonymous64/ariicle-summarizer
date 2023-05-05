import { logo } from '../assets';

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo} alt="logo" className='w-28 object-contain' />
                <button type='button' onClick={() => window.open("https://github.com/Synonymous64/ariicle-summarizer", "_blank")} className='black_btn'>
                    Github
                </button>
            </nav>
            <h1 className='head_text'>
                Summarize Articles using <br className='max-md:hidden' /> <span className='orange_gradient'> OpenAI GPT-4</span>
            </h1>
            <h2 className='desc'>
                👋 Hey there! Want to save time⏱️ and read more efficiently🤓? Try out our summarizer tool📝! Our software uses natural language processing🤖 to extract the most important information from long texts and documents, giving you a concise summary👌.
            </h2>
        </header>
    )
}

export default Hero;