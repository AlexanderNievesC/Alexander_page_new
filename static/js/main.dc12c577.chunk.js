(this["webpackJsonpmy-page"]=this["webpackJsonpmy-page"]||[]).push([[0],{129:function(e,t,n){e.exports=n.p+"static/media/undulate.2acd93a3.svg"},131:function(e,t,n){"use strict";n.r(t);var a=n(33),l=n(1),o=n.n(l),r=n(72),i=n.n(r);const c='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',s='"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",\n    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',p={text:{xs:"\n      font-size: 0.75rem;\n      line-height: 1rem;\n      ",sm:"\n      font-size: 0.875rem;\n      line-height: 1.25rem;\n      ",md:"\n      font-size: 1rem;\n      line-height: 1.5rem;\n      ",lg:"\n      font-size: 1.125rem;\n      line-height: 1.75rem;\n      ",xl:"\n      font-size: 1.25rem;\n      line-height: 1.75rem;\n      "},head:{xs:"\n      font-size: 1.25rem;\n      line-height: 1.75rem;\n      ",sm:"\n      font-size: 1.5rem;\n      line-height: 2rem;\n      ",md:"\n      font-size: 1.875rem;\n      line-height: 2.25rem;\n      ",lg:"\n      font-size: 2.25rem;\n      line-height: 2.5rem;\n      ",xl:"\n      font-size: 3rem;\n      line-height: 3rem;\n      ",xxl:"\n      font-size: 3.75rem;\n      line-height: 3.75rem;\n      "}};for(const ue in p.text)p.text[ue]+=`\n    font-family: ${c};\n    `;for(const ue in p.head)p.head[ue]+=`\n    font-family: ${s};\n    font-weight: 600;\n    `;const d={5:"#E5E4E2",10:"#71797E",20:"#D3D3D3"},m={10:"#9370DB",20:"#DDA0DD",30:"#9400D3",40:"#9A7FD6"},h={10:"#48D1CC",20:"#2E8B89",30:"#7AD7F0"};var u=n(4),x=n(44),f=n.n(x);function g(){return o.a.createElement("div",null,o.a.createElement(w,null,o.a.createElement(y,null,o.a.createElement(b,null,"Hi, I'm Alexander"),o.a.createElement(E,null,"I develop full-stack web applications"),o.a.createElement("a",{href:"https://AlexanderNievesC.github.io/Alexander_page_new/cv_alexander_nieves.pdf",target:"_blank"},o.a.createElement(v,null,"Get my CV"))),o.a.createElement("img",{src:f.a,style:{width:"100%",opacity:"0.8"},alt:"Background Lines"})))}const b=u.a.div`
    font-family: ${c};
    font-size: 70px;
    font-weight: 700;
    color: white;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
`,E=u.a.div`
    color: white;
    font-size: 17px;
    font-weight: bold;
    font-family: ${c};
`,w=u.a.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${m[10]};
    background-size: cover;
    background-position: center;
    padding-top:200px;
    height: 400px; /* Full viewport height */
    width: 100%; /* Full width */
    text-align: center;
`,y=u.a.div`
    display: flex;
    flex-direction: column;
    position:absolute;
    gap: 20px;
    color: white;
    font-family: ${c};
    font-weight: bold;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1; /* Ensure it appears above other content */
`,v=u.a.button`
    border: black;
    font-family: ${c};
    font-weight: bold;
    border-radius: 10px;
    color: white;
    background-color: ${h[20]};
    width: 110px;
    height: 50px;
    font-size: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        color: white;
        font-weight: bold;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        cursor:pointer;
    }
`;var k=n(60);function z(){const e=e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})},[t,n]=Object(l.useState)(!1);return Object(l.useEffect)(()=>{const e=()=>{n(window.scrollY>0)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),o.a.createElement($,{className:t?"scrolled":""},o.a.createElement(A,null,o.a.createElement(j,{onClick:()=>e("introduction")},"Alexander"),o.a.createElement(D,{onClick:()=>e("experience")},"Experience"),o.a.createElement(D,{onClick:()=>e("projects")},"Projects"),o.a.createElement(D,{onClick:()=>e("contacts")},"Contact")),o.a.createElement(S,null,o.a.createElement(C,null,o.a.createElement("a",{href:"https://github.com/AlexanderNievesC",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(k.a,{style:{color:"white",width:"25px",height:"25px"}})),o.a.createElement("a",{href:"https://www.linkedin.com/in/alexander-nieves-4a9520327/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(k.b,{style:{color:"white",width:"25px",height:"25px"}})))))}const $=u.a.div`
    display:flex;
    position:fixed;
    flex-direction: row;
    gap:30px;
    padding:20px;  
    width:100%;
    height:100px;
    align-content:center;
    justify-content: space-between;
    align-content:center;
    align-items:center;
    background-color:transparent;
    font-family:${c};
    z-index: 9999;

    /* Initially, no shadow */
  box-shadow: none;

  /* Add shadow when the user scrolls */
  &.scrolled {
    background-color: ${m[10]};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  }
`,j=u.a.div`
    font-family:${c};
    font-weight:700;
    font-size:30px;
    color:white;
    padding:20px;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
    cursor:pointer;
`,D=u.a.div`
    padding-top:5px;
    position: relative;
    background-color: transparent;
    font-weight: bold;
    color: white;
    height: 40px;
    overflow: hidden; 
    cursor:pointer;
    
    /* The pseudo-element for the bold line */
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px; /* Thickness of the bold line */
        background-color: white;
        transform: translateX(-100%); /* Initially hidden */
        transition: transform 0.5s ease-in-out; /* Duration of the animation */
    }

    &:hover::before {
        transform: translateX(0); /* Move to full width on hover */
    }
`,S=(u.a.button`
    border:black;
    font-family:${c};
    font-weight:bold;
    border-radius:30px;
    color:white;
    background-color:${h[20]};
    width:90px;
    height:35px;
    font-size:14px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover{
        background-color:${h[10]};
        color:white;
        text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
        font-weight:bold;
    }
`,u.a.div`    
    display:flex;
    flex-direction:row;
    justify-content:center;
    justify-items:center;
    align-items:center;
    gap:30px;
    padding:20px;
`),A=(u.a.div`
    display:flex;
    flex-direction:row;
    gap:5px;
    justify-items:center;
    align-items:center;
`,u.a.div`
    display: flex;
    flex-direction:row;
    gap:30px;
    justify-content:center;
    text-align:center;
    text-align:center;
    align-content:center;
    align-items:center;
    border-radius:1px solid red;
    height:85px;
    
`),C=u.a.div`
    display:flex;
    flex-direction:row;

    gap:20px;
    align-items:center;
    justify-content:center;
`;var I=n(26),_=n(53),M=n(61);function R(){return o.a.createElement(T,null,o.a.createElement(O,null,"Experience and  Education"),o.a.createElement(I.Timeline,{minEvents:5,placeholder:!0},o.a.createElement(I.TimelineEvent,{color:"#9c2919",icon:_.a,title:o.a.createElement(B,null,"Mining Engineer"),subtitle:o.a.createElement(B,null,"2011-2015")}),o.a.createElement(I.TimelineEvent,{color:"#87a2c7",icon:M.a,title:o.a.createElement(B,null,"Analyst"),subtitle:o.a.createElement(B,null,"2017-2018")}),o.a.createElement(I.TimelineEvent,{color:"#9c2919",icon:_.a,title:o.a.createElement(B,null,"Data Architect"),subtitle:o.a.createElement(B,null,"2020-2023")}),o.a.createElement(I.TimelineEvent,{color:"#9c2919",icon:_.a,title:o.a.createElement(B,null,"Full Stack Developer"),subtitle:o.a.createElement(B,null,"2023")}),o.a.createElement(I.TimelineEvent,{color:"#87a2c7",icon:M.a,title:o.a.createElement(B,null,"Software Analyst"),subtitle:o.a.createElement(B,null,"2024")})))}const T=u.a.div`
    display:flex;
    flex-direction: column;
    gap:40px;
    align-content:center;
    align-items:center;
    justify-content: center;
    background-color: ${m[10]};
    padding-top:50px;
    height:700px;
`,O=u.a.div`
    font-family:${c};
    font-weight:700;
    font-size:30px;
    color:white;
    padding:20px;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
    `,B=u.a.div`
    transition: transform 0.3s ease;
    font-family:${c};
    font-size:15px;
    color:white;

    &:hover{
        transform: scale(1.1); 
    }
    `;var F=n(76),J=n.n(F),N=n(77),U=n.n(N),P=n(78),Y=n.n(P),H=n(79),L=n.n(H),W=n(80),G=n.n(W);function V(){return o.a.createElement(X,null,o.a.createElement(q,null,"My Projects"),o.a.createElement(ee,null,o.a.createElement(K,{href:"https://keepable-alex.netlify.app/",alt:"keepable",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"black"}},o.a.createElement("img",{src:J.a,style:{width:"300px",height:"200px"}}),o.a.createElement("div",null,o.a.createElement(Q,null,"Note Manager"),o.a.createElement("div",null,"Application that allows the user to create,  delete and restore notes"),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(Z,null,"#Javascript")))),o.a.createElement(K,{href:"https://doableapp1alexander.netlify.app/",alt:"keepable",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"black"}},o.a.createElement("img",{src:U.a,style:{width:"300px",height:"200px"}}),o.a.createElement("div",null,o.a.createElement(Q,null,"Planner"),o.a.createElement("div",null,"Application that allows the user to manage assignments"),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(Z,null,"#Javascript")))),o.a.createElement(K,{href:"https://main--alexanderorganz.netlify.app/",alt:"keepable",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"black"}},o.a.createElement("img",{src:Y.a,style:{width:"300px",height:"200px"}}),o.a.createElement("div",null,o.a.createElement(Q,null,"Organizer"),o.a.createElement("div",null,"Is difficult for you organize your projects? This app will help you with that"),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(Z,null,"#Javascript")))),o.a.createElement(K,{href:"https://statalex.netlify.app/",alt:"keepable",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"black"}},o.a.createElement("img",{src:L.a,style:{width:"300px",height:"200px"}}),o.a.createElement("div",null,o.a.createElement(Q,null,"Contact Manager"),o.a.createElement("div",null,"Useful app to organize contacts in your computer"),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(Z,null,"#React")))),o.a.createElement(K,{href:" https://get-that-job-nieves.netlify.app/",alt:"keepable",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"black"}},o.a.createElement("img",{src:G.a,style:{width:"300px",height:"200px"}}),o.a.createElement("div",null,o.a.createElement(Q,null,"Get that job"),o.a.createElement("div",null,"App that allow users to interact with companies and help you to get a job"),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(Z,null,"#React #Ruby on Rails #Javascript"))))))}const X=u.a.div`
    display: flex;
    flex-direction: column;
    align-content:center;
    align-items:center;
    justify-content: center;
    background-color: ${m[10]};
    padding-bottom:150px;

    `,q=u.a.div`
    font-family:${c};
    font-weight:700;
    font-size:30px;
    color:white;
    padding:20px;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
`,K=u.a.a`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: ${m[40]};
    width: 350px;
    height: 400px;
    border-radius: 20px;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
    padding: 30px;
    transition: transform 0.3s ease;

    &:hover {
        transform: rotate(5deg); /* Rotate slightly */
    }
`,Q=u.a.div`
    font-family:${c};
    font-weight:700;
    font-size:20px;
    color:white;

`,Z=u.a.div`
    font-family:${c};
    color:white;
    font-size:15px;
`,ee=u.a.div`
    position: relative;
    display:flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content:center;
`;n(129);var te=n(81),ne=n.n(te);function ae(){return o.a.createElement(le,null,o.a.createElement(oe,null,o.a.createElement(re,null,"Contact me"),o.a.createElement(ie,{onSubmit:async e=>{e.preventDefault();const t=new FormData(e.target);t.append("access_key","cf243ad0-78d2-4264-bf57-6a8e4d518ac9");const n=Object.fromEntries(t),a=JSON.stringify(n),l=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:a}).then(e=>e.json());l.success&&console.log("Success",l)}},o.a.createElement(ce,null,"Your name"),o.a.createElement(pe,{tyep:"text",placeholder:"What's your name?",name:"name"}),o.a.createElement(ce,null,"Your email"),o.a.createElement(pe,{type:"email",placeholder:"What's your email?",name:"email"}),o.a.createElement(ce,null,"Your message"),o.a.createElement(pe,{placeholder:"What do you want to tell me?",name:"message"}),o.a.createElement(se,{type:"submit"},"Send"))),o.a.createElement("img",{src:ne.a,style:{width:"400px"}}))}const le=u.a.div`
    display: flex;
    flex-direction: row;
    gap: 90px;
    padding:20px;
    align-content:center;
    align-items:center;
    justify-content: center;
    background-color: ${m[10]};
    padding-botton:40px;
    `,oe=u.a.div`
    display:flex;
    flex-direction:column;
    background-color:${m[40]};
    height:450px;
    width:500px;
    padding:30px;
    gap:20px;
    border-radius:20px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    
`,re=u.a.div`
    font-family:${c};
    font-weight:700;
    font-size:20px;
    color:white;
`,ie=u.a.form`
    display:flex;
    flex-direction:column;
    gap:10px;
    
`,ce=u.a.label`
    color:white;
    font-size:15x;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);

`,se=u.a.button`
    border: black;
    font-family: ${c};
    font-weight: bold;
    border-radius: 10px;
    color: white;
    background-color: ${h[20]};
    width: 110px;
    height: 50px;
    font-size: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        color: white;
        font-weight: bold;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        cursor:pointer;
    }
`,pe=u.a.input`
    padding:10px;
    border-radius:10px;
    background-color: rgba(255, 255, 255, 0.5);

`;var de=function(){return o.a.createElement("div",null,o.a.createElement(z,null),o.a.createElement("section",{id:"introduction"},o.a.createElement(g,null)),o.a.createElement("section",{id:"experience"},o.a.createElement(R,null)),o.a.createElement("section",{id:"projects"},o.a.createElement(V,null)),o.a.createElement("section",{id:"contacts"},o.a.createElement(ae,null)))};const me=a.b`



  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@400;500;600&display=swap");

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin:0px;
    border:0px;
  }


  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
    padding:0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
    margin:0px;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
      
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`,he=a.b`
  body {
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: ${c};
    color: ${d[900]};
  }
`;i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(a.a,{styles:he}),o.a.createElement(a.a,{styles:me}),o.a.createElement(de,null)))},44:function(e,t,n){e.exports=n.p+"static/media/lines.09b691a0.svg"},76:function(e,t,n){e.exports=n.p+"static/media/keepable.f15a289c.png"},77:function(e,t,n){e.exports=n.p+"static/media/doable.af455554.png"},78:function(e,t,n){e.exports=n.p+"static/media/organizable.a86db350.png"},79:function(e,t,n){e.exports=n.p+"static/media/gitstats.2d52b372.png"},80:function(e,t,n){e.exports=n.p+"static/media/getjob.d704699d.png"},81:function(e,t,n){e.exports=n.p+"static/media/programmer.55726997.svg"},86:function(e,t,n){e.exports=n(131)}},[[86,1,2]]]);
//# sourceMappingURL=main.dc12c577.chunk.js.map