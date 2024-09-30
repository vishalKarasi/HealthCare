import { QuoteCloseIcon, QuoteOpenIcon } from "@assets/icons/icons";
import "./testimonialCard.css";

function TestimonialCard(props) {
  const { image, name, location, testimonial } = props;
  return (
    <article className="testimonialCard">
      <div className="info">
        <img src={image} alt="pfp" loading="lazy" />
        <div>
          <div className="name">{name}</div>
          <i>{location}</i>
        </div>
      </div>
      <p className="testimonial">
        <QuoteOpenIcon />
        {testimonial}
        <QuoteCloseIcon />
      </p>
    </article>
  );
}

export default TestimonialCard;
