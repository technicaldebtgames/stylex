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
      <section className='content-section'>
          <div className='content-display'>
              <div className='vapor-sunset-container'>
                <div className='vapor-sunset'></div>
              </div>
          </div>
          <p className='content-p'>Vaporwave.</p>
          <code className='content-code'>
            <b><i>html:</i></b><br/><br/>
            &#60;div className='vapor-sunset-container'&#62;<br/>
            &nbsp;&nbsp;&#60;div className='vapor-sunset'&#62;&#60;/div&#62;<br/>
            &#60;/div&#62;<br/><br/>
            <b><i>css:</i></b><br/><br/>
            .vapor-sunset-container &#123;<br/>
            &nbsp;&nbsp;margin: auto;<br/>
            &nbsp;&nbsp;padding: 3vw;<br/>
            &nbsp;&nbsp;width: 73%;<br/>
            &nbsp;&nbsp;background: linear-gradient(<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0deg,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;#DD3344 0%,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;#EE4466 15%,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;#442299 50%,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;#2b1165 100%<br/>
            &nbsp;&nbsp;);<br/>
            &#125;<br/><br/>
            .vapor-sunset &#123;<br/>
            &nbsp;&nbsp;margin: auto;<br/>
            &nbsp;&nbsp;width: 40vw;<br/>
            &nbsp;&nbsp;height: 40vw;<br/>
            &nbsp;&nbsp;border-radius: 20vw;<br/>
            &nbsp;&nbsp;position: relative;<br/>
            &nbsp;&nbsp;overflow: hidden;<br/>
            &#125;<br/><br/>
            .vapor-sunset::before &#123;<br/>
            &nbsp;&nbsp;content: "";<br/>
            &nbsp;&nbsp;display: block;<br/>
            &nbsp;&nbsp;top: 0;<br/>
            &nbsp;&nbsp;height: 50%;<br/>
            &nbsp;&nbsp;background: linear-gradient(<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0deg,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;#2b1165 0%,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;#441166 15%,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;#442299 51%,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;#EE4466 100%<br/>
            &nbsp;&nbsp;);<br/>
            &nbsp;&nbsp;background-size: 40vw 40vw;<br/>
            &nbsp;&nbsp;width: 100%;<br/>
            &#125;<br/><br/>
            .vapor-sunset::after &#123;<br/>
            &nbsp;&nbsp;content: "";<br/>
            &nbsp;&nbsp;display: block;<br/>
            &nbsp;&nbsp;bottom: 0;<br/>
            &nbsp;&nbsp;width: 100%;<br/>
            &nbsp;&nbsp;height: 50%;<br/>
            &nbsp;&nbsp;background: linear-gradient(<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0deg,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;#EE3355 0%,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;#EE3355 20%,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;#442299 50%,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;#442299 100%<br/>
            &nbsp;&nbsp;);<br/>
            &nbsp;&nbsp;background-size: 40vw 40vw;<br/>
            &nbsp;&nbsp;background-position: bottom center;<br/>
            &nbsp;&nbsp;clip-path: polygon(<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 -20vw, 100% -20vw, 100% -20.5vw, 0 -20.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 -18vw, 100% -18vw, 100% -18.5vw, 0 -18.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 -16vw, 100% -16vw, 100% -16.5vw, 0 -16.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 -14vw, 100% -14vw, 100% -14.5vw, 0 -14.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 -12vw, 100% -12vw, 100% -12.5vw, 0 -12.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 -10vw, 100% -10vw, 100% -10.5vw, 0 -10.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 -8vw, 100% -8vw, 100% -8.5vw, 0 -8.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 -6vw, 100% -6vw, 100% -6.5vw, 0 -6.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 -4vw, 100% -4vw, 100% -4.5vw, 0 -4.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 -2vw, 100% -2vw, 100% -2.5vw, 0 -2.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 0, 100% 0, 100% -.5vw, 0 -.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 0, 100% 0, 100% .5vw, 0 .5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 2vw, 100% 2vw, 100% 2.5vw, 0 2.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 4vw, 100% 4vw, 100% 4.5vw, 0 4.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 6vw, 100% 6vw, 100% 6.5vw, 0 6.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 8vw, 100% 8vw, 100% 8.5vw, 0 8.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 10vw, 100% 10vw, 100% 10.5vw, 0 10.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 12vw, 100% 12vw, 100% 12.5vw, 0 12.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 14vw, 100% 14vw, 100% 14.5vw, 0 14.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 16vw, 100% 16vw, 100% 16.5vw, 0 16.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;0 18vw, 100% 18vw, 100% 18.5vw, 0 18.5vw);<br/>
            &nbsp;&nbsp;animation: vapor-sunset 25s cubic-bezier(0.25, 0.30, 0.20, 0.25) infinite;<br/>
            &#125;<br/><br/>
            @keyframes vapor-sunset &#123;<br/>
            &nbsp;&nbsp;to &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;clip-path: polygon(<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 0, 100% 0, 100% .5vw, 0 .5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 2vw, 100% 2vw, 100% 2.5vw, 0 2.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 4vw, 100% 4vw, 100% 4.5vw, 0 4.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 6vw, 100% 6vw, 100% 6.5vw, 0 6.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 8vw, 100% 8vw, 100% 8.5vw, 0 8.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 10vw, 100% 10vw, 100% 10.5vw, 0 10.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 12vw, 100% 12vw, 100% 12.5vw, 0 12.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 14vw, 100% 14vw, 100% 14.5vw, 0 14.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 16vw, 100% 16vw, 100% 16.5vw, 0 16.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 18vw, 100% 18vw, 100% 18.5vw, 0 18.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 20vw, 100% 20vw, 100% 20vw, 0 20vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 22vw, 100% 22vw, 100% 22.5vw, 0 22.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 24vw, 100% 24vw, 100% 24.5vw, 0 24.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 26vw, 100% 26vw, 100% 26.5vw, 0 26.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 28vw, 100% 28vw, 100% 28.5vw, 0 28.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 30vw, 100% 30vw, 100% 30.5vw, 0 30.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 32vw, 100% 32vw, 100% 32.5vw, 0 32.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 34vw, 100% 34vw, 100% 34.5vw, 0 34.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 36vw, 100% 36vw, 100% 36.5vw, 0 36.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 38vw, 100% 38vw, 100% 38.5vw, 0 38.5vw,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 40vw, 100% 40vw, 100% 40.5vw, 0 40.5vw<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;);<br/>
            &nbsp;&nbsp;&#125;<br/>
            &#125;
          </code>
      </section>
    </div>
  );
}

export default MainContent;