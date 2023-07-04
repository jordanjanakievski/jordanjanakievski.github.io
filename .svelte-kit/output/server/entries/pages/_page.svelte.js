import { c as create_ssr_component, e as escape, d as add_attribute, f as add_styles, v as validate_component } from "../../chunks/index2.js";
const down_arrow_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".down-arrow.svelte-smt0r9{margin-top:500px}",
  map: null
};
const Down_arrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `

${``}`;
});
const data_card_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "h2.svelte-1n41lew.svelte-1n41lew.svelte-1n41lew{font-size:24px;margin:0}.polaroid.svelte-1n41lew.svelte-1n41lew.svelte-1n41lew{background-color:white;margin:20px;text-align:center;padding:10px;width:150px;transition:0.7s}.polaroid.svelte-1n41lew.svelte-1n41lew.svelte-1n41lew:hover{transition:0.7s;box-shadow:0 8px 16px 0 rgba(0, 0, 0, 0.2)}.polaroid.svelte-1n41lew:hover>.polaroid-image-backdrop.svelte-1n41lew>.polaroid-image.svelte-1n41lew{transition:0.5s;filter:drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))}.polaroid-image.svelte-1n41lew.svelte-1n41lew.svelte-1n41lew{transition:0.5s}.polaroid-image-backdrop.svelte-1n41lew.svelte-1n41lew.svelte-1n41lew{transition:0.7s;background-color:#e0f1ff}.polaroid.svelte-1n41lew:hover>.polaroid-image-backdrop.svelte-1n41lew.svelte-1n41lew{transition:0.5s;box-shadow:inset 0 4px 8px 0 rgba(0, 0, 0, 0.2)}",
  map: null
};
const Data_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { data } = $$props;
  let { icon } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  $$result.css.add(css$3);
  return `
<div class="polaroid svelte-1n41lew"><div class="polaroid-image-backdrop svelte-1n41lew"><img class="polaroid-image svelte-1n41lew" src="${"icons/" + escape(icon, true) + ".svg"}"${add_attribute("alt", icon, 0)} width="100"></div>
	<h2 class="svelte-1n41lew">${escape(title)}</h2>
	<p>${escape(data)}</p>
</div>`;
});
const project_card_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "h2.svelte-31vqxs.svelte-31vqxs.svelte-31vqxs{font-size:20px;color:black;margin:0;padding-top:10px}a.svelte-31vqxs.svelte-31vqxs.svelte-31vqxs{text-decoration:none}.polaroid.svelte-31vqxs.svelte-31vqxs.svelte-31vqxs{background-color:white;margin:20px 0px 20px 0px;text-align:center;padding:10px;width:250px;height:350px;transition:0.7s}.polaroid.svelte-31vqxs.svelte-31vqxs.svelte-31vqxs:hover{transition:0.7s;box-shadow:0 8px 16px 0 rgba(0, 0, 0, 0.2)}.polaroid.svelte-31vqxs:hover>.polaroid-image-backdrop.svelte-31vqxs>.polaroid-image.svelte-31vqxs{transition:0.7s;filter:drop-shadow(6px 10px 4px rgb(0 0 0 / 0.4))}.polaroid-image.svelte-31vqxs.svelte-31vqxs.svelte-31vqxs{transition:0.7s}.polaroid-image-backdrop.svelte-31vqxs.svelte-31vqxs.svelte-31vqxs{transition:0.7s;background-color:#e0f1ff;width:250px;height:240px}.polaroid.svelte-31vqxs:hover>.polaroid-image-backdrop.svelte-31vqxs.svelte-31vqxs{transition:0.5s;box-shadow:inset 0 4px 8px 0 rgba(0, 0, 0, 0.2)}",
  map: null
};
const Project_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { icon } = $$props;
  let { url } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css$2);
  return `
<a${add_attribute("href", url, 0)} class="svelte-31vqxs"><div class="polaroid svelte-31vqxs"><div class="polaroid-image-backdrop svelte-31vqxs"><img class="polaroid-image svelte-31vqxs" src="${"icons/" + escape(icon, true) + ".svg"}"${add_attribute("alt", icon, 0)} width="210"></div>
		<h2 class="svelte-31vqxs">${escape(title)}</h2></div>
</a>`;
});
const contact_icon_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-77lkke{text-decoration:none}.icon.svelte-77lkke{transition:0.7s;width:100px}.icon.svelte-77lkke:hover{transition:0.7s;filter:drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))}@media only screen and (max-width: 840px){.icon.svelte-77lkke{width:80px}}",
  map: null
};
const Contact_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { url } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css$1);
  return `
<a${add_attribute("href", url, 0)} class="svelte-77lkke"><img class="icon svelte-77lkke" src="${"icons/" + escape(icon, true) + ".svg"}"${add_attribute("alt", icon, 0)}>
</a>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{margin:0;padding:0;font-family:'Futura', sans-serif;background-color:#e0f1ff}h1.svelte-z40rbz{color:#fb2f2f;font-family:'Futura', sans-serif;font-size:82px;position:absolute;text-align:center}h2.svelte-z40rbz{color:#fb2f2f;font-family:'Futura', sans-serif;font-size:60px;text-align:center}h3.svelte-z40rbz{color:#fb2f2f;font-family:'Futura', sans-serif;font-size:48px;text-align:center}h4.svelte-z40rbz{color:#fb2f2f;font-family:'Futura', sans-serif;font-size:32px;text-align:center}p.svelte-z40rbz{color:#1c2c44;font-family:'Helvetica', sans-serif;font-size:24px;text-align:left}.hero.svelte-z40rbz{min-height:100vh;max-width:1440px;margin-left:20%;margin-right:20%;position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column}.about.svelte-z40rbz{min-height:100vh;max-width:1440px;position:relative;justify-content:center;margin-left:20%;margin-right:20%;display:flex;align-items:center;flex-wrap:wrap;flex-direction:column}.about-content.svelte-z40rbz{display:flex;justify-content:center;flex-direction:row;max-width:900px}.about-images.svelte-z40rbz{display:flex;justify-content:center;flex-direction:column}.memoji.svelte-z40rbz{width:400px;height:400px}.about-cards.svelte-z40rbz{display:flex;justify-content:center;flex-direction:column;align-items:center}.about-data.svelte-z40rbz{display:flex;justify-content:space-around;flex-direction:row}.projects.svelte-z40rbz{min-height:100vh;max-width:1440px;position:relative;justify-content:center;margin-left:20%;margin-right:20%;display:flex;align-items:center;flex-wrap:wrap;flex-direction:column}.project-cards.svelte-z40rbz{display:flex;justify-content:space-around;flex-direction:column}.contact.svelte-z40rbz{min-height:80vh;max-width:1440px;width:auto;position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column;margin-left:20%;margin-right:20%}.contact-contents.svelte-z40rbz{display:flex;justify-content:space-around;flex-direction:column;height:400px}.contact-links.svelte-z40rbz{display:flex;justify-content:space-evenly;flex-direction:row}@media only screen and (max-width: 1160px){.about-content.svelte-z40rbz{flex-direction:column}.about-images.svelte-z40rbz{flex-direction:row}.memoji.svelte-z40rbz{width:300px;height:300px}}@media only screen and (max-width: 840px){.about-data.svelte-z40rbz{flex-direction:column}}@media only screen and (max-width: 700px){h1.svelte-z40rbz{font-size:54px}h2.svelte-z40rbz{font-size:38px}h3.svelte-z40rbz{font-size:30px}p.svelte-z40rbz{font-size:18px}.about.svelte-z40rbz{margin-left:10%;margin-right:10%}.memoji.svelte-z40rbz{width:160px;height:160px}.projects.svelte-z40rbz{flex-direction:row}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scroll;
  let chess_api_data = { chess_rapid: { last: { rating: 0 } } };
  $$result.css.add(css);
  return `

<div class="hero svelte-z40rbz"><h1 class="svelte-z40rbz"${add_styles({
    "transform": `translate3d(0, ${scroll * -2}px, 0`
  })}>Jordan<br>Janakievski
	</h1>
	${validate_component(Down_arrow, "DownArrow").$$render($$result, {}, {}, {})}</div>
<div class="about svelte-z40rbz"><h2 class="svelte-z40rbz">About Me</h2>
	<div class="about-content svelte-z40rbz"><div class="about-images svelte-z40rbz"><img class="memoji svelte-z40rbz" src="images/memoji-hand-raise.png" alt="Memoji">
			<img class="memoji svelte-z40rbz" src="images/memoji-laptop.png" alt="Memoji"></div>
		<p class="svelte-z40rbz">Hi, my name is Jordan!
			<br><br>
			I am an undergrad studying computer science at the University of Toronto. Having grown up in Seattle,
			I think of myself as someone of two countries, two cities, and two towers.
			<br><br>
			My passion is to continue making a difference by developing software to improve people&#39;s
			lives. Whether it be direct impact through a software solution or contributing to a company that
			serves to better its community, I believe software can empower change and lead people and organizations
			to achieve the best possible outcomes.
			<br><br>
			When away from the computer, I enjoy exploring the outdoors. Whether it be kayaking, SCUBA diving,
			or rock climbing, it is a great way to appreciate nature. I also enjoy playing tennis and soccer
			as well as being a referee for youth soccer on the weekends.
			<br><br>
			I am also a novice horologist. While I only have a small collection, I love learning about the
			mechanisms of a watch and how they work together. I find the symbiotic relationship between the
			watch and its wearer to be so interesting.
		</p></div>
	<div class="about-cards svelte-z40rbz"><h3 class="svelte-z40rbz">By the Numbers</h3>
		<div class="about-data svelte-z40rbz">${validate_component(Data_card, "DataCard").$$render(
    $$result,
    {
      title: "Chess.com Rating",
      data: chess_api_data.chess_rapid.last.rating,
      icon: "chess-pawn"
    },
    {},
    {}
  )}
			${validate_component(Data_card, "DataCard").$$render(
    $$result,
    {
      title: "Climbing Grade",
      data: "v5",
      icon: "man-climbing-light-skin-tone"
    },
    {},
    {}
  )}
			${validate_component(Data_card, "DataCard").$$render(
    $$result,
    {
      title: "Matches Officiated",
      data: "300+",
      icon: "soccer-ball"
    },
    {},
    {}
  )}
			${validate_component(Data_card, "DataCard").$$render(
    $$result,
    {
      title: "Watches Collected",
      data: "5",
      icon: "watch"
    },
    {},
    {}
  )}</div></div></div>
<div class="projects svelte-z40rbz"><h2 class="svelte-z40rbz">Projects</h2>
	<div class="project-cards svelte-z40rbz">${validate_component(Project_card, "ProjectCard").$$render(
    $$result,
    {
      title: "Plankton Eye Mobile App",
      icon: "microscope",
      url: "https://github.com/jordanjanakievski/plankton_eye"
    },
    {},
    {}
  )}
		${validate_component(Project_card, "ProjectCard").$$render(
    $$result,
    {
      title: "Portfolio Website",
      icon: "artist-palette",
      url: "https://github.com/jordanjanakievski/jordanjanakievski.github.io"
    },
    {},
    {}
  )}
		${validate_component(Project_card, "ProjectCard").$$render(
    $$result,
    {
      title: "UofT Blueprint Website",
      icon: "desktop-computer",
      url: "https://github.com/uoftblueprint/uoftblueprint.github.io"
    },
    {},
    {}
  )}
		${validate_component(Project_card, "ProjectCard").$$render(
    $$result,
    {
      title: "Toronto Community Employment Servcies (TCES) CRM",
      icon: "clipboard",
      url: "https://github.com/uoftblueprint/tces"
    },
    {},
    {}
  )}</div></div>
<br><br>
<br><br>
<div class="contact svelte-z40rbz"><h2 class="svelte-z40rbz">Thank you for visiting</h2>
	<h4 class="svelte-z40rbz">You can also find me at any of these places...</h4>
	<div class="contact-contents svelte-z40rbz"><div class="contact-links svelte-z40rbz">${validate_component(Contact_icon, "ContactIcon").$$render(
    $$result,
    {
      icon: "e-mail",
      url: "mailto:jordan.a.janakievski@gmail.com"
    },
    {},
    {}
  )}
			${validate_component(Contact_icon, "ContactIcon").$$render(
    $$result,
    {
      icon: "github",
      url: "https://github.com/jordanjanakievski"
    },
    {},
    {}
  )}
			${validate_component(Contact_icon, "ContactIcon").$$render(
    $$result,
    {
      icon: "gitlab",
      url: "https://gitlab.com/jordanjanakievski"
    },
    {},
    {}
  )}
			${validate_component(Contact_icon, "ContactIcon").$$render(
    $$result,
    {
      icon: "linkedin",
      url: "https://linkedin.com/in/jordan-janakievski"
    },
    {},
    {}
  )}</div></div>
</div>`;
});
export {
  Page as default
};
