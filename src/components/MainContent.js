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
          <p className='content-p'>A glitched text utilizing rgb shadows and clipped spans.</p>
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
          <p className='content-p'>A vaporwave sunset featuring gradient transitions and slight bezier curve animation speed manipulation.</p>
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
            &nbsp;&nbsp;&nbsp;&nbsp;#EE3355 0%,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;#EE4466 15%,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;#442299 50%,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;#221166 100%<br/>
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
            &nbsp;&nbsp;&nbsp;&nbsp;#221166 0%,<br/>
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
            &nbsp;&nbsp;&nbsp;&nbsp;#EE3355 12.5%,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;#5533AA 30%,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;#442299 49%,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;#EE3355 100%<br/>
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
            &nbsp;&nbsp;animation: vapor-sunset 25s<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cubic-bezier(0.25, 0.30, 0.20, 0.25) infinite;<br/>
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
      <section className='content-section'>
          <div className='content-display'>
            <div className='crt-container'>
                <div className='crt'>
                    <p className='crt-p'>C:\ crt.css</p>
                </div>
            </div>
          </div>
          <p className='content-p'>A cathode ray tube simulation with some liberties taken.</p>
          <code className='content-code'>
            <b><i>html:</i></b><br/><br/>
            &#60;div className='crt-container'&#62;<br/>
            &nbsp;&nbsp;&#60;div className='crt'&#62;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#60;p className='crt-p'&#62;C:\ crt.css&#60;/p&#62;<br/>
            &nbsp;&nbsp;&#60;/div&#62;<br/>
            &#60;/div&#62;<br/><br/>
            <b><i>css:</i></b><br/><br/>
            .crt-container &#123;<br/>
            &nbsp;&nbsp;margin: auto;<br/>
            &nbsp;&nbsp;padding: 3vw;<br/>
            &nbsp;&nbsp;width: 73%;<br/>
            &nbsp;&nbsp;background-color: #451A1A;<br/>
            &#125;<br/><br/>
            .crt &#123;<br/>
            &nbsp;&nbsp;position: relative;<br/>
            &nbsp;&nbsp;width: 100%;<br/>
            &nbsp;&nbsp;height: 10vw;<br/>
            &#125;<br/><br/>
            .crt::before &#123;<br/>
            &nbsp;&nbsp;content: "";<br/>
            &nbsp;&nbsp;display: block;<br/>
            &nbsp;&nbsp;position: absolute;<br/>
            &nbsp;&nbsp;top: 0;<br/>
            &nbsp;&nbsp;left: 0;<br/>
            &nbsp;&nbsp;bottom: 0;<br/>
            &nbsp;&nbsp;right: 0;<br/>
            &nbsp;&nbsp;background: linear-gradient(rgba(50, 50, 50, 0) 50%,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rgba(0, 0, 0, 0.1) 50%),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;linear-gradient(90deg,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rgba(255, 0, 0, 0.075),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rgba(0, 255, 0, 0.025),<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rgba(0, 0, 255, 0.075));<br/>
            &nbsp;&nbsp;background-size: 1% 2px, 1px 1%;<br/>
            &nbsp;&nbsp;pointer-events: none;<br/>
            &nbsp;&nbsp;border-radius: 2vw;<br/>
            &#125;<br/><br/>
            .crt::after &#123;<br/>
            &nbsp;&nbsp;content: "";<br/>
            &nbsp;&nbsp;display: block;<br/>
            &nbsp;&nbsp;position: absolute;<br/>
            &nbsp;&nbsp;top: 0;<br/>
            &nbsp;&nbsp;left: 0;<br/>
            &nbsp;&nbsp;bottom: 0;<br/>
            &nbsp;&nbsp;right: 0;<br/>
            &nbsp;&nbsp;background: rgba(50, 50, 50, 0.075);<br/>
            &nbsp;&nbsp;pointer-events: none;<br/>
            &nbsp;&nbsp;animation: screen 52ms infinite;<br/>
            &nbsp;&nbsp;border-radius: 2vw;<br/>
            &#125;<br/><br/>
            .crt-p &#123;<br/>
            &nbsp;&nbsp;padding: 2vw 0 5.55vw 2vw;<br/>
            &nbsp;&nbsp;background-color: white;<br/>
            &nbsp;&nbsp;text-align: left;<br/>
            &nbsp;&nbsp;font-family: monospace;<br/>
            &nbsp;&nbsp;font-size: 2vw;<br/>
            &nbsp;&nbsp;border-radius: 2vw;<br/>
            &nbsp;&nbsp;box-shadow: inset 0 0 10vw #555555,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inset 0 0 1.5vw #111111;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 0 0.5vw #222222;<br/>
            &nbsp;&nbsp;text-shadow: 0 0 0.2vw;<br/>
            &#125;<br/><br/>
            @keyframes screen &#123;<br/>
            &nbsp;&nbsp;0% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.45;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;5% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.15;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;10% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.25;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;15% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.75;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;20% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.15;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;25% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.45;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;30% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.25;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;35% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.75;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;40% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.55;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;45% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.25;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;50% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.85;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;55% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.35;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;60% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.65;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;65% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.15;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;70% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.45;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;75% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.35;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;80% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.75;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;85% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.65;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;90% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.15;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;95% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.35;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;100% &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.65;<br/>
            &nbsp;&nbsp;&#125;<br/>
            &#125;
          </code>
      </section>
    </div>
  );
}

export default MainContent;