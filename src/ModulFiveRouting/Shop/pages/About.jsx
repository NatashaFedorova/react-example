import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Suspense } from 'react';

const StyleLink = styled(NavLink)`
  position: relative;
  font-weight: 600;
  text-decoration: none;
  color: #090000;
  opacity: 0.7;
  transition: opacity 0.3s cubic-bezier(0.51, 0.92, 0.24, 1);

  &::after {
    --scale: 0;

    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: 3px;
    background: linear-gradient(135deg, rgb(250, 115, 115), rgb(155, 0, 0));
    transform: scaleX(var(--scale));
    transform-origin: var(--x) 50%;
    transition: transform 0.3s cubic-bezier(0.51, 0.92, 0.24, 1);
  }

  &:hover {
    opacity: 1;
  }

  &:hover::after {
    --scale: 1;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

const About = () => {
  const handleMouse = e => {
    const el = e.target;
    const tolerance = 10;
    const left = 0;
    const right = el;

    let x = e.pageX - el.offsetLeft;

    if (x - tolerance < left) x = left;
    if (x + tolerance > right) x = right;

    el.style.setProperty('--x', `${x}px`);
  };
  return (
    <main>
      <h1>Online Shop</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis totam voluptates optio
        ratione repudiandae beatae vitae minima harum, qui facere, eos expedita aliquam hic ea
        temporibus, fuga rerum consequuntur officia deleniti quaerat modi libero autem possimus!
        Libero voluptas tempore nesciunt nostrum omnis distinctio nulla, itaque accusamus alias
        quibusdam impedit dolores harum officiis et, modi enim, similique ullam magni. Odit, dolorem
        delectus pariatur quod ut, non quo, sequi beatae sed vitae aperiam necessitatibus eveniet?
        Totam, nemo qui fuga nam delectus architecto.
      </p>

      <List>
        <li>
          <StyleLink to="mission" onMouseLeave={handleMouse} onMouseEnter={handleMouse}>
            Mission
          </StyleLink>
        </li>
        <li>
          <StyleLink to="team" onMouseLeave={handleMouse} onMouseEnter={handleMouse}>
            Team
          </StyleLink>
        </li>
        <li>
          <StyleLink to="reviews" onMouseLeave={handleMouse} onMouseEnter={handleMouse}>
            Reviews
          </StyleLink>
        </li>
      </List>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default About;
