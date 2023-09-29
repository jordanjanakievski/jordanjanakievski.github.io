import { c as create_ssr_component, e as escape, d as add_attribute, f as add_styles, v as validate_component, h as each } from "../../chunks/index2.js";
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
  code: "h2.svelte-fzf1s8.svelte-fzf1s8.svelte-fzf1s8{font-size:25px;color:black;margin:0;padding-top:10px}a.svelte-fzf1s8.svelte-fzf1s8.svelte-fzf1s8{text-decoration:none}.polaroid.svelte-fzf1s8.svelte-fzf1s8.svelte-fzf1s8{background-color:white;margin:20px 0px 20px 0px;text-align:center;margin:20px;padding:10px;width:250px;height:350px;transition:0.7s}.polaroid.svelte-fzf1s8.svelte-fzf1s8.svelte-fzf1s8:hover{transition:0.7s;box-shadow:0 8px 16px 0 rgba(0, 0, 0, 0.2)}.polaroid.svelte-fzf1s8:hover>.polaroid-image-backdrop.svelte-fzf1s8>.polaroid-image.svelte-fzf1s8{transition:0.7s;filter:drop-shadow(6px 10px 4px rgb(0 0 0 / 0.4))}.polaroid-image.svelte-fzf1s8.svelte-fzf1s8.svelte-fzf1s8{transition:0.7s}.polaroid-image-backdrop.svelte-fzf1s8.svelte-fzf1s8.svelte-fzf1s8{transition:0.7s;background-color:#e0f1ff;width:250px;height:240px}.polaroid.svelte-fzf1s8:hover>.polaroid-image-backdrop.svelte-fzf1s8.svelte-fzf1s8{transition:0.5s;box-shadow:inset 0 4px 8px 0 rgba(0, 0, 0, 0.2)}",
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
<a${add_attribute("href", url, 0)} class="svelte-fzf1s8"><div class="polaroid svelte-fzf1s8"><div class="polaroid-image-backdrop svelte-fzf1s8"><img class="polaroid-image svelte-fzf1s8" src="${"icons/" + escape(icon, true) + ".svg"}"${add_attribute("alt", icon, 0)} width="210"></div>
		<h2 class="svelte-fzf1s8">${escape(title)}</h2></div>
</a>`;
});
const contact_icon_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-190fm9d{text-decoration:none}.icon.svelte-190fm9d{transition:0.7s;width:75px}.icon.svelte-190fm9d:hover{transition:0.7s;filter:drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))}@media only screen and (max-width: 840px){.icon.svelte-190fm9d{width:80px}}",
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
<a${add_attribute("href", url, 0)} class="svelte-190fm9d"><img class="icon svelte-190fm9d" src="${"icons/" + escape(icon, true) + ".svg"}"${add_attribute("alt", icon, 0)}>
</a>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{margin:0;padding:0;font-family:'Futura', sans-serif;background-color:#e0f1ff}h1.svelte-1dnuj6z{color:#fb2f2f;font-family:'Futura', sans-serif;font-size:82px;position:absolute;text-align:center}h2.svelte-1dnuj6z{color:#fb2f2f;font-family:'Futura', sans-serif;font-size:60px;text-align:center}h3.svelte-1dnuj6z{color:#fb2f2f;font-family:'Futura', sans-serif;font-size:48px;text-align:center}h4.svelte-1dnuj6z{color:#fb2f2f;font-family:'Futura', sans-serif;font-size:32px;text-align:center}p.svelte-1dnuj6z{color:#1c2c44;font-family:'Helvetica', sans-serif;font-size:24px;text-align:left}.hero.svelte-1dnuj6z{min-height:100vh;max-width:1440px;margin-left:20%;margin-right:20%;position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column}.about.svelte-1dnuj6z{min-height:100vh;max-width:1440px;position:relative;justify-content:center;margin-left:20%;margin-right:20%;display:flex;align-items:center;flex-wrap:wrap;flex-direction:column}.about-content.svelte-1dnuj6z{display:flex;justify-content:center;flex-direction:row;max-width:900px}.about-cards.svelte-1dnuj6z{display:flex;justify-content:center;flex-direction:column;align-items:center}.about-data.svelte-1dnuj6z{display:flex;justify-content:space-around;flex-direction:row;flex-wrap:wrap}.projects.svelte-1dnuj6z{min-height:100vh;max-width:1440px;position:relative;justify-content:center;margin-left:20%;margin-right:20%;display:flex;align-items:center;flex-wrap:wrap;flex-direction:column}.project-cards.svelte-1dnuj6z{display:flex;justify-content:space-around;flex-direction:row;flex-wrap:wrap}.contact.svelte-1dnuj6z{min-height:80vh;max-width:1440px;width:auto;position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column;margin-left:20%;margin-right:20%;margin-bottom:10vh}.contact-contents.svelte-1dnuj6z{display:flex;justify-content:space-around;flex-direction:column;height:200px}.contact-links.svelte-1dnuj6z{display:flex;justify-content:space-evenly;flex-direction:row;flex-wrap:wrap}@media only screen and (max-width: 1160px){.about-content.svelte-1dnuj6z{flex-direction:column}}@media only screen and (max-width: 840px){.about-data.svelte-1dnuj6z{flex-direction:column}}@media only screen and (max-width: 700px){h1.svelte-1dnuj6z{font-size:54px}h2.svelte-1dnuj6z{font-size:38px}h3.svelte-1dnuj6z{font-size:30px}h4.svelte-1dnuj6z{font-size:24px}p.svelte-1dnuj6z{font-size:18px}.about.svelte-1dnuj6z{margin-left:10%;margin-right:10%}.projects.svelte-1dnuj6z{flex-direction:row}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scroll;
  let chess_api_data = { chess_rapid: { last: { rating: 0 } } };
  let project_data = [];
  let numbers_data = [];
  $$result.css.add(css);
  return `

<div class="hero svelte-1dnuj6z"><h1 class="svelte-1dnuj6z"${add_styles({
    "transform": `translate3d(0, ${scroll * -2}px, 0`
  })}>Jordan<br>Janakievski
	</h1>
	${validate_component(Down_arrow, "DownArrow").$$render($$result, {}, {}, {})}</div>
<div class="about svelte-1dnuj6z"><h2 class="svelte-1dnuj6z">About Me</h2>
	<div class="about-content svelte-1dnuj6z"><p class="svelte-1dnuj6z">Hi, my name is Jordan!
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
	<div class="about-cards svelte-1dnuj6z"><h3 class="svelte-1dnuj6z">By the Numbers</h3>
		<div class="about-data svelte-1dnuj6z">${validate_component(Data_card, "DataCard").$$render(
    $$result,
    {
      title: "Chess.com Rating",
      data: chess_api_data.chess_rapid.last.rating,
      icon: "chess-pawn"
    },
    {},
    {}
  )}
			${each(numbers_data, (data) => {
    return `${validate_component(Data_card, "DataCard").$$render(
      $$result,
      {
        title: data.title,
        data: data.value,
        icon: data.image
      },
      {},
      {}
    )}`;
  })}</div></div></div>
<div class="projects svelte-1dnuj6z"><h2 class="svelte-1dnuj6z">Projects</h2>
	<div class="project-cards svelte-1dnuj6z">${each(project_data, (project) => {
    return `${validate_component(Project_card, "ProjectCard").$$render(
      $$result,
      {
        title: project.title,
        icon: project.image,
        url: project.link
      },
      {},
      {}
    )}`;
  })}</div></div>
<br><br>
<br><br>
<div class="contact svelte-1dnuj6z"><h2 class="svelte-1dnuj6z">Thanks for visiting!</h2>
	<h4 class="svelte-1dnuj6z">You can also find me at any of these places...</h4>
	<div class="contact-contents svelte-1dnuj6z"><div class="contact-links svelte-1dnuj6z">${validate_component(Contact_icon, "ContactIcon").$$render(
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
