var Vision Commodities = {

	createCookie: function(name, value, days) {
		var expires;
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toGMTString();
		} else {
			expires = "";
		}
		document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
	},

	readCookie: function(name) {
		var nameEQ = escape(name) + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) === ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) === 0) return unescape(c.substring(nameEQ.length, c.length));
		}
		return null;
	},

	eraseCookie: function(name) {
		createCookie(name, "", -1);
	},
			
	tree_session: function(jskey, bit) {
		$.post(WWW + "req/tree_session.php", { jskey: jskey, bit: bit });
	},

	tree: function(jskey, el) {
		if(el.src == WWW + "images/b_plus.png") {
			el.src = WWW + "images/b_minus.png";
			document.getElementById(jskey).style.display = "inline";
			UCP.tree_session(jskey, 1);
		} else {
			el.src = WWW + "images/b_plus.png";
			document.getElementById(jskey).style.display = "none";
			UCP.tree_session(jskey, 0);
		}
	}
				
}
