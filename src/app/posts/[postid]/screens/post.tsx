import {eliseu_image, Image, imagem_capa,} from "@/app/global.imports";


function PostScreen() {
    return (
        <section id="post-container" >
            <div className="post-title">
                <h2>What&apos;s Architecture Weekly</h2>
            </div>
            <div className="post-author-details">
                <Image src={eliseu_image} alt="" width={50} height={50} className=" circle " />
                <div className="post-date-detail">
                    <p className="post-author-name">Eliseu Gaspar</p>
                    <p className="post-date-publish">Nov 27,2024 - 10:46</p>
                </div>
            </div>
            <div className="post-interative-actions">
                <div className="post-interative-left-zone">
                    <button><i className="fas fa-heart"></i> 23</button>
                    <button><i className="fas fa-comment"></i> 7</button>
                    <button><i className="fas fa-eye"></i> 70</button>
                </div>
                <div className="post-interative-right-zone">
                    <button><i className="fas fa-ellipsis"></i></button>
                </div>
            </div>
            <div className="post-image-cover">
                <Image src={imagem_capa} alt=""></Image>
            </div>
            <div className="post-header-container">
                <p>
                Internet is full of decent content, but it’s not easy to filter the noise and find what’s essential. I’m doing that for you. Every week, I gather a list of Software Architecture resources that helps to boost your skills.
                </p>
            </div>
            <div className="post-body-container">
                    <h1>What to expect?</h1>

                    <p>Holistic views on the software architecture and best/worst practices. I believe that you’ll face similar architecture issues no matter which technology you choose. You can benefit from the sound patterns and samples from the other technology stack and bite by the same worst-case scenarios.</p>

                    <p>Technology-agnostic, diverse, but pragmatic content. I think that going outside your tech community bubble is always eye-opening. There is no bad/worse technology. It’s just helpful or not in a particular context. You’ll find various technology stacks, also content about engineering, industry management and coding life.</p>

                    <p>An independent viewpoint. No ads, no self-promotion. The focus is on sharing and learning. You can check my blog and GitHub profile to follow my other works.</p>

                    <p>Personal perspective. See how I’m learning, what I’m reading, what intrigues me. Nevertheless, think for yourself—question authority.</p>

                    <h3>For paid subscribers:</h3>
                    <ul>
                        <li>
                            <p>Monthly webinars explaining practical aspects of Software Architecture.</p>
                        </li>
                        <li>
                            <p>Exclusive community on the Discord channel. It’s a great chance to ask questions, get answers and exchange ideas. Being Architect and Technical Leader means, too often, the loneliness of being the smartest in the room. We have a safe community open for discussion and helping each other.</p>
                        </li>
                        <li>
                            <p>Access to all the recordings of the previously run webinars.</p>
                        </li>
                        <li>
                            <p>Other exclusive content.</p>
                        </li>
                    </ul>

                    <h3>For all subscribers:</h3>
                    <ul>
                        <li>
                            <p>Monthly webinars explaining practical aspects of Software Architecture.</p>
                        </li>
                        <li>
                            <p>Exclusive community on the Discord channel. It’s a great chance to ask questions, get answers and exchange ideas. Being Architect and Technical Leader means, too often, the loneliness of being the smartest in the room. We have a safe community open for discussion and helping each other.</p>
                        </li>
                        <li>
                            <p>Access to all the recordings of the previously run webinars.</p>
                        </li>
                        <li>
                            <p>Other exclusive content.</p>
                        </li>
                    </ul>

                    <h2>Webinars:</h2>
                    <p>#1 - From CRUD to Event Sourcing</p>

                    <p>#2 - Keep your streams short! Or how to model Event-Sourced systems efficiently</p>

                    <p>#3 - Implementing Distributed Processes</p>

                    <p>#4 - From CRUD to CQRS in Practice</p>

                    <p>#5 - Architecture Weekly 100 Edition - Live Q&A</p>

                    <p>#6 - Alexey Zimarev - You don&apos;t need an Event Sourcing framework. Or do you?</p>

                    <p>#7 - Design and test Event-Driven projections and read models</p>

                    <p>#8 - Slim down your aggregates!</p>

                    <p>#9 - Radek Maziarka - Modularization with Event Storming Process Level</p>

                    <p>#10 - PostgreSQL Superpowers in Practice</p>

                    <p>#11 - Maciej &quot;MJ&quot; Jędrzejewski - Evolutionary Architecture: The What. The Why. The How.</p>

                    <p>#12 - Jeremy D. Miller: Simplify your architecture with Wolverine</p>

                    <p>#13 - Yves Goeleven - The Fantastic 9</p>

                    <p>Happy reading!</p>

                    <p><small>Oskar Dudycz</small></p>
            </div>
            <div className="post-comments-container">
                <div className="post-comment-title">
                    <h2>Comentários</h2>
                </div>
                <div className="comments-zone">
                    <div className="user-comments-detail">
                        <div className="image">
                            <Image src={eliseu_image} alt="" width={40} height={40} className="circle" />
                        </div>
                        <div className="user-detail">
                            <h4>Eduardo Gaspar</h4>
                            <span>07/05/2024</span>
                        </div>
                    </div>
                    <div className="comments">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus eum eligendi sequi a sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus eum eligendi sequi a sed.
                        </p>
                    </div>
                </div>
                <div className="comments-zone">
                    <div className="user-comments-detail">
                        <div className="image">
                            <Image src={eliseu_image} alt="" width={40} height={40} className="circle" />
                        </div>
                        <div className="user-detail">
                            <h4>Eduardo Gaspar</h4>
                            <span>07/05/2024</span>
                        </div>
                    </div>
                    <div className="comments">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus eum eligendi sequi a sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus eum eligendi sequi a sed.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PostScreen;