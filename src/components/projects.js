import React from "react"
import "./styles/projects.css"

function Projects() {
    return (
        <div class="container">
                <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src={require('../img/coding.jpg')} alt="Social network Rubdevs" /></div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <a href="https://github.com/RubDevs/redSocial"><h4>Social Network Backend</h4></a>
                            <p class="text-black-50 mb-0">A simple Node.js based social network backend, microservices architecture, ready to work in containers</p>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div class="col-lg-6"><img class="img-fluid" src={require('../img/snake.gif')} alt="Snake RubDevs" /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <a href="https://github.com/RubDevs/snake"><h4 class="text-white">Snake</h4></a>
                                    <p class="mb-0 text-white-50">The clasic Snake game made on Ruby.</p>
                                    <hr class="d-none d-lg-block mb-0 ml-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center no-gutters">
                    <div class="col-lg-6"><img class="img-fluid" src={require('../img/ChatNode.png')} alt="Chat app RubDevs" /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <a href="https://github.com/RubDevs/ChatNode"><h4 class="text-white">Chat App</h4></a>
                                    <p class="mb-0 text-white-50">A chat application on Node.js, API and websockets enabled, ready to work in containers!</p>
                                    <hr class="d-none d-lg-block mb-0 mr-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Projects