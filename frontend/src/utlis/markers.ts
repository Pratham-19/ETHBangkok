import { Token, User } from "@/types/types";

const createMarkerElement = (className: string, content: string) => {
	const el = document.createElement("div");
	el.className = className;
	el.innerHTML = content;
	return el;
};

const createPlayerMarker = (user: User) =>
	createMarkerElement(
		"player-marker",
		`
      <div class="player-outer">
        <div class="token-gradient-border">
          <div class="player-inner">
            <img src="${user.avatarUrl}" alt="${user.name}" class="marker-image" />
          </div>
        </div>
      </div>
      `
	);

const createUserMarker = (user: User) => {
	const el = document.createElement("div");
	el.className = "user-marker";
	el.innerHTML = `
      <div class="other-user-outer">
        <div class="token-gradient-border">
          <img src="${user.avatarUrl}" alt="${user.name}" class="marker-image" />
        </div>
      </div>
    `;
	return el;
};

const createTokenMarker = (token: Token) =>
	createMarkerElement(
		"token-marker",
		`<div class="token-outer">
      <div class="token-gradient-border">
        <div class="token-inner">
          <img src="${token.logoUrl}" alt="${token.symbol}" class="marker-image" />
        </div>
      </div>
    </div>`
	);

const createCrateMarker = () =>
	createMarkerElement(
		"crate-marker",
		`<div class="crate-outer">
      <div class="crate-gradient-border">
        <div class="crate-inner">
          <img src="/chest-pic.png" alt="crate" class="marker-image" />
        </div>
      </div>
    </div>`
	);

export {
	createUserMarker,
	createTokenMarker,
	createCrateMarker,
	createPlayerMarker,
};