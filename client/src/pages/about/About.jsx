import "./about.css";
import hospital from "@assets/images/about/hospital.jpg";
import objective from "@assets/images/about/objective.jpg";

function About() {
  return (
    <main className="about">
      <h1>About</h1>
      <section>
        <img src={hospital} alt="hospital image" loading="lazy" />
        <h3>
          <span>History: </span> Our Journey of Care
        </h3>
        <p>
          Healthcare was founded with a mission to provide high-quality,
          accessible healthcare to the community. Over the years, we've grown
          from a small clinic into a comprehensive healthcare center, offering a
          wide range of medical services. With decades of experience, our
          dedicated team has treated countless patients, building trust and a
          reputation for excellence in care. Our journey continues as we embrace
          the latest advancements in medicine while staying true to our roots of
          compassion and patient-centered care.
        </p>
      </section>
      <section>
        <h3>
          <span>Objective: </span> Our Commitment to Your Health
        </h3>
        <p>
          Our primary goal at Healthcare is to empower individuals to lead
          healthier, fuller lives. We strive to deliver personalized medical
          care with a focus on preventive health, early diagnosis, and effective
          treatment. Through continuous innovation, patient education, and a
          dedicated team of healthcare professionals, we are committed to
          improving the quality of life for each patient. We believe that
          healthcare is a partnership, and our objective is to provide the
          support and care you need to thrive.
        </p>
        <img src={objective} alt="hospital image" loading="lazy" />
      </section>
    </main>
  );
}

export default About;
