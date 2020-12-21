import React from "react";
import "../../Scss/main.scss";
import teacher1 from "../../Assets/img/team-1-370x406.jpg";
import teacher2 from "../../Assets/img/team-2-370x406.jpg";
import teacher3 from "../../Assets/img/team-3-370x406.jpg";
import { Container } from "@material-ui/core";

const HomeOurTeachers = () => {

  return (
    <section className="our-teachers">
      <Container fixed>
        <div className="our-teachers__title">
          <div className="our-teachers__line"></div>
          <h6>
            OUR TEACHERS
          </h6>
        </div>

        <div className="our-teachers__wrapper">
          <div className="our-teachers__wrapper__item">
            <img src={teacher1} alt="teacher1" />
            <div className="our-teachers__wrapper__item__detail">
              <h5>Sam Lee</h5>
              <p>Business Strategy Teacher</p>
            </div>
          </div>

          <div className="our-teachers__wrapper__item">
            <img src={teacher2} alt="teacher2" />
            <div className="our-teachers__wrapper__item__detail">
              <h5>Peter Wilson</h5>
              <p>HR Management Teacher</p>
            </div>
          </div>

          <div className="our-teachers__wrapper__item">
            <img src={teacher3} alt="teacher3" />
            <div className="our-teachers__wrapper__item__detail">
              <h5>Jill Sanders</h5>
              <p>Brand Strategy Teacher</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeOurTeachers;

