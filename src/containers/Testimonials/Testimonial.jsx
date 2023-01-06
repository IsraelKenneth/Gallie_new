import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "../Testimonials/Testimonial.css"
import First from "../../assets/Testimonials/1.png"
import Second from "../../assets/Testimonials/2.png"
import Third from "../../assets/Testimonials/3.png"



const Testimonial = () => {
    return (
        <section className="gallie__testimonial">
            <div class="container py-5">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-10 col-xl-8 text-center">
                        <h3 class="fw-bold mb-4">Testimonials</h3>
                        <p class="mb-4 pb-2 mb-md-5 pb-md-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                            numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                            quisquam eum porro a pariatur veniam.
                        </p>
                    </div>
                </div>

                <div class="row text-center">
                    <div class="col-md-4 mb-4 mb-md-0">
                        <div class="card">
                            <div class="card-body py-4 mt-2">
                                <div class="d-flex justify-content-center mb-4">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                                        class="rounded-circle shadow-1-strong" width="100" height="100" />
                                </div>
                                <h5 class="font-weight-bold">Teresa May</h5>
                                <h6 class="font-weight-bold my-3">Founder at ET Company</h6>
                                <ul class="list-unstyled d-flex justify-content-center">
                                    <li>
                                        <i class="fas fa-star fa-sm text-info"></i>
                                    </li>
                                    <li>
                                        <i class="fas fa-star fa-sm text-info"></i>
                                    </li>
                                    <li>
                                        <i class="fas fa-star fa-sm text-info"></i>
                                    </li>
                                    <li>
                                        <i class="fas fa-star fa-sm text-info"></i>
                                    </li>
                                    <li>
                                        <i class="fas fa-star-half-alt fa-sm text-info"></i>
                                    </li>
                                </ul>
                                <p class="mb-2">
                                    <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                                    ad velit ab hic tenetur.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0">
                        <div class="card">
                            <div class="card-body py-4 mt-2">
                                <div class="d-flex justify-content-center mb-4">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                                        class="rounded-circle shadow-1-strong" width="100" height="100" />
                                </div>
                                <h5 class="font-weight-bold">Maggie McLoan</h5>
                                <h6 class="font-weight-bold my-3">Photographer at Studio LA</h6>
                                <ul class="list-unstyled d-flex justify-content-center">
                                    <li>
                                        <i class="fas fa-star fa-sm text-info"></i>
                                    </li>
                                    <li>
                                        <i class="fas fa-star fa-sm text-info"></i>
                                    </li>
                                    <li>
                                        <i class="fas fa-star fa-sm text-info"></i>
                                    </li>
                                    <li>
                                        <i class="fas fa-star fa-sm text-info"></i>
                                    </li>
                                    <li>
                                        <i class="fas fa-star fa-sm text-info"></i>
                                    </li>
                                </ul>
                                <p class="mb-2">
                                    <i class="fas fa-quote-left pe-2"></i>Autem, totam debitis suscipit saepe
                                    sapiente magnam officiis quaerat necessitatibus odio assumenda perferendis
                                    labore laboriosam.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-0">
                        <div class="card">
                            <div class="card-body py-4 mt-2">
                                <div class="d-flex justify-content-center mb-4">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                                        class="rounded-circle shadow-1-strong" width="100" height="100" />
                                </div>
                                <h5 class="font-weight-bold">Alexa Horwitz</h5>
                                <h6 class="font-weight-bold my-3">Front-end Developer in NY</h6>
                                <ul class="list-unstyled d-flex justify-content-center">
                                    <li>
                                        <i class="fas fa-star fa-sm text-info"></i>
                                    </li>
                                    <li>
                                        <i class="fas fa-star fa-sm text-info"></i>
                                    </li>
                                    <li>
                                        <i class="fas fa-star fa-sm text-info"></i>
                                    </li>
                                    <li>
                                        <i class="fas fa-star fa-sm text-info"></i>
                                    </li>
                                    <li>
                                        <i class="far fa-star fa-sm text-info"></i>
                                    </li>
                                </ul>
                                <p class="mb-2">
                                    <i class="fas fa-quote-left pe-2"></i>Cras sit amet nibh libero, in gravida
                                    nulla metus scelerisque ante sollicitudin commodo cras purus odio,
                                    vestibulum in tempus viverra turpis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Testimonial