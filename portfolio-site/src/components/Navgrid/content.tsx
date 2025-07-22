import { getTimeGreeting } from "../../utils/utils";

export interface ContentType {
  category: string;
  description: React.ReactNode;
}

export const content: ContentType[] = [
  {
    category: 'about',
    description: <>
      <p className='top-spacing'>{ getTimeGreeting() }. I'm Julian Grey, a frontend developer focused on crafting clean, intuitive, and engaging digital experiences.</p>

      <p className='top-spacing'>With a background in Computing and Games Development, I bring a unique perspective to the web, blending a keen eye for design with a deep understanding of user interaction. For the past nine years, I've been translating complex problems into elegant, high-performance code. I'm driven by the challenge of building pixel-perfect interfaces and continuously expanding my skill set to keep pace with the ever-evolving tech landscape.</p>

      <p className='top-spacing'>When I'm not coding, I'm usually exploring new technologies, diving into game development, or studying Japanese.</p>
    </>,
  },
  {
    category: 'contact',
    description: <>
      <p className='top-spacing'>I'm always excited to connect and discuss new opportunities. If you have a project in mind, a role to fill, or just want to talk tech, please feel free to reach out.</p>
      <a className='top-spacing' href="https://www.linkedin.com/in/julianrgrey/" target="_blank">Connect with me on LinkedIn</a>
      <a className='top-spacing' href="mailto:contact@juliangrey.dev">Email me - contact@juliangrey.dev</a>
    </>,
  },
  {
    category: 'creative',
    description: <>
      <p className='top-spacing'>I believe creativity is about more than just aesthetics, it's about finding innovative solutions to complex problems. I enjoy pushing the boundaries to add personality and unique interactions to my projects, making them memorable and engaging for users.</p>
    </>,
  },
  {
    category: 'interactive',
    description: <>
      <p className='top-spacing'>Modern web experiences are dynamic. I build with interactivity at the forefront, using subtle animations and transitions to create an intuitive and responsive user journey. My goal is to make interfaces that feel alive and natural to use.</p>
    </>,
  },
  {
    category: 'portfolio',
    description: <>
      <p className='top-spacing'>This website serves as a living portfolio, documenting my journey as I explore new technologies and build out projects. I'm passionate about continuous learning, and here you'll find my work-in-progress and future case studies. For a real-time look at my coding activity, feel free to check out my <a href="http://github.com/JulianGrey" target="_blank">GitHub</a>.</p>
      <p className='top-spacing bold'>Current Learning & Development Focus</p>
      <ul>
        <li>React: Deepening my expertise in building complex, scalable applications</li>
        <li>Node.js: Expanding my full-stack capabilities</li>
        <li>AWS: Gaining practical experience in cloud deployment and infrastructure</li>
      </ul>
    </>,
  },
  {
    category: 'responsive',
    description: <>
      <p className='top-spacing'>In today's multi-device world, a seamless experience is paramount. I build with a responsive-by-default methodology, ensuring every project is optimized for all screen sizes, from mobile phones to desktop monitors. Cross-browser and cross-platform compatibility are standard in my work.</p>
    </>,
  },
  {
    category: 'simple',
    description: <>
      <p className='top-spacing'>I subscribe to the "less is more" philosophy. Simplicity is key to creating products that are not only elegant and intuitive but also performant and maintainable. I focus on writing clean code and designing interfaces that do exactly what they need to do, exceptionally well.</p>
    </>,
  },
];
