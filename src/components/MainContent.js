import React from 'react';

import '../styles/MainContent.css';
import '../styles/Examples.css';

/*

    space = &nbsp;
    enter = <br/>
    < = &#60;
    > = &#62;
    { = &#123;
    } = &#125;

*/

function MainContent() {
  return (
    <div className='MainContent'>
      <section className='content-section'>
          <div className='content-display'>
            <h1 className='glitch'><span aria-hidden='true'>Glitch text</span>Glitch text<span aria-hidden='true'>Glitch text</span></h1>
          </div>
          <p className='content-p'>You can adjust the animations (or omit or add to them) as you see fit. These styles should be browser-agnostic and should work on any modern browser. It's a lot of code, but the vast majority of it is just animation frames.</p>
          <code className='content-code'>
            <b><i>html:</i></b><br/><br/>
            &#60;h1 className='glitch'&#62;<br/>&nbsp;&nbsp;&#60;span aria-hidden='true'&#62;Glitch text&#60;/span&#62;<br/>&nbsp;&nbsp;Glitch text<br/>&nbsp;&nbsp;&#60;span aria-hidden='true'&#62;Glitch text&#60;/span&#62;<br/>&#60;/h1&#62;<br/><br/>
            <b><i>css:</i></b><br/><br/>
            .glitch &#123;<br/>
            &nbsp;&nbsp;position: relative;<br/>
            &nbsp;&nbsp;margin: 1vw;<br/>
            &nbsp;&nbsp;font-size: 7.5vw;<br/>
            &nbsp;&nbsp;font-weight: 600;<br/>
            &nbsp;&nbsp;text-transform: uppercase;<br/>
            &nbsp;&nbsp;animation: glitch-color 2500ms infinite;<br/>
            &#125;<br/><br/>
            .glitch span &#123;<br/>
            &nbsp;&nbsp;position: absolute;<br/>
            &nbsp;&nbsp;margin: auto;<br/>
            &nbsp;&nbsp;top: 0;<br/>
            &nbsp;&nbsp;left: 0;<br/>
            &nbsp;&nbsp;bottom: 0;<br/>
            &nbsp;&nbsp;right: 0;<br/>
            &#125;<br/><br/>
            .glitch span:first-child &#123;<br/>
            &nbsp;&nbsp;animation: glitch-color 1750ms infinite;<br/>
            &nbsp;&nbsp;animation: glitch-clip-a 850ms infinite;<br/>
            &#125;<br/><br/>
            .glitch span:last-child &#123;<br/>
            &nbsp;&nbsp;animation: glitch-color 1300ms infinite;<br/>
            &nbsp;&nbsp;animation: glitch-clip-b 1030ms infinite;<br/>
            &#125;<br/><br/>
            @keyframes glitch-color &#123;<br/>
            &nbsp;&nbsp;0% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: -0.15vw -0.095vw 0 rgba(0, 255, 0, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0.095vw 0.15vw 0 rgba(0, 0, 255, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0.15vw 0.095vw 0 rgba(255, 0, 0, 0.8);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;19% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: -0.15vw -0.095vw 0 rgba(0, 255, 0, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0.095vw 0.15vw 0 rgba(0, 0, 255, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0.15vw 0.095vw 0 rgba(255, 0, 0, 0.8);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;20% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: -0.095vw -0.15vw 0 rgba(0, 255, 0, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0.15vw 0.095vw 0 rgba(0, 0, 255, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0.095vw 0.15vw 0 rgba(255, 0, 0, 0.8);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;34% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: -0.095vw -0.15vw 0 rgba(0, 255, 0, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0.15vw 0.095vw 0 rgba(0, 0, 255, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0.095vw 0.15vw 0 rgba(255, 0, 0, 0.8);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;35% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: 0.15vw 0.095vw 0 rgba(0, 255, 0, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;-0.095vw -0.15vw 0 rgba(0, 0, 255, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;-0.15vw -0.095vw 0 rgba(255, 0, 0, 0.8);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;59% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: 0.15vw 0.095vw 0 rgba(0, 255, 0, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;-0.095vw -0.15vw 0 rgba(0, 0, 255, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;-0.15vw -0.095vw 0 rgba(255, 0, 0, 0.8);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;60% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: -0.15vw 0.15vw 0 rgba(0, 255, 0, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;-0.095vw 0.095vw 0 rgba(0, 0, 255, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0.095vw -0.15vw 0 rgba(255, 0, 0, 0.8);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;74% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: -0.15vw 0.15vw 0 rgba(0, 255, 0, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;-0.095vw 0.095vw 0 rgba(0, 0, 255, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0.095vw -0.15vw 0 rgba(255, 0, 0, 0.8);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;75% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: -0.095vw -0.15vw 0 rgba(0, 255, 0, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0.15vw -0.15vw 0 rgba(0, 0, 255, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;-0.15vw 0.15vw 0 rgba(255, 0, 0, 0.8);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;84% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: -0.095vw -0.15vw 0 rgba(0, 255, 0, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0.15vw -0.15vw 0 rgba(0, 0, 255, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;-0.15vw 0.15vw 0 rgba(255, 0, 0, 0.8);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;85% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: 0.095vw -0.095vw 0 rgba(0, 255, 0, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;-0.095vw 0.095vw 0 rgba(0, 0, 255, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;-0.15vw 0.15vw 0 rgba(255, 0, 0, 0.8);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;99% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: 0.095vw -0.095vw 0 rgba(0, 255, 0, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;-0.095vw 0.095vw 0 rgba(0, 0, 255, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;-0.15vw 0.15vw 0 rgba(255, 0, 0, 0.8);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;100% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;text-shadow: -0.15vw -0.095vw 0 rgba(0, 255, 0, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0.095vw 0.15vw 0 rgba(0, 0, 255, 0.8),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0.15vw 0.095vw 0 rgba(255, 0, 0, 0.8);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &#125;<br/><br/>
            @keyframes glitch-clip-a &#123;<br/>
            &nbsp;&nbsp;0% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% 70%, 0 30%);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(0.1vw, 0.1vw);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;34% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% 70%, 0 30%);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(0.1vw, 0.1vw);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;35% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% 60%, 0 40%);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(-0.1vw, 0.1vw);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;54% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% 60%, 0 40%);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(-0.1vw, 0.1vw);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;55% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% 40%, 0 70%);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(0.1vw, -0.1vw);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;89% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% 40%, 0 70%);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(0.1vw, -0.1vw);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;90% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% 80%, 0 20%);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(-0.1vw, -0.1vw);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;99% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% 80%, 0 20%);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(-0.1vw, -0.1vw);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;100% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 0, 100% 0, 100% 70%, 0 30%);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(0.1vw, 0.1vw);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &#125;<br/><br/>
            @keyframes glitch-clip-b &#123;<br/>
            &nbsp;&nbsp;0% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 40%, 100% 45%, 100% 100%, 0 100%);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(-0.1vw, -0.1vw);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;14% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 40%, 100% 45%, 100% 100%, 0 100%);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(-0.1vw, -0.1vw);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;15% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 60%, 100% 25%, 100% 100%, 0 100%);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(-0.1vw, 0.1vw);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;44% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 60%, 100% 25%, 100% 100%, 0 100%);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(-0.1vw, 0.1vw);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;45% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 30%, 100% 75%, 100% 100%, 0 100%);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(0.1vw, -0.1vw);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;79% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 30%, 100% 75%, 100% 100%, 0 100%);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(0.1vw, -0.1vw);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;80% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 80%, 100% 55%, 100% 100%, 0 100%);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(0.1vw, 0.1vw);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;99% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 80%, 100% 55%, 100% 100%, 0 100%);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(0.1vw, 0.1vw);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;100% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(0 40%, 100% 45%, 100% 100%, 0 100%);<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: translate(-0.1vw, -0.1vw);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &#125;
          </code>
      </section>
    </div>
  );
}

export default MainContent;