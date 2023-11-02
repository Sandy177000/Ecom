import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const ListView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid">
        {products.map((curElem) => {
          const { id, name, image, price, description } = curElem;
          return (
            <div className="card grid grid-two-column">
              <figure>
                <img src={image} alt={name} />
              </figure>

              <div className="card-data">
                <h3>{name}</h3>
                <p>${price / 100}</p>
                <p>{description.slice(0, 90)}...</p>

                <NavLink to={`/singleproduct/${id}`} className="btn-main">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  color: rgba(256, 256, 256, 0.5);
  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3.2rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    img {
      border: 10px;
      max-width: 90%;
      margin-top: 1rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    border: 1px solid rgba(256, 256, 256, 0.4);
    border-radius: 10px;
    color: rgba(256, 256, 256, 0.4);

    .card-data {
      padding: 0 2rem;
    }
    .card-data p {
      color: rgba(256, 256, 256, 0.3);
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-transform: capitalize;
    }

    .btn {
      margin: 2rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(256, 256, 256, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(256, 256, 256, 0.3);

      &:hover {
        background-color: rgb(256, 256, 256, 0.3);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(256, 256, 256, 0.3);
        font-size: 1.4rem;
      }
    }

    .btn-main .btn:hover {
      color: #fff;
    }
  }
`;

export default ListView;
