((window.gitter = {}).chat = {}).options = {
	room: 'googlome/verysync'
};

function set_key(array) {
	array.forEach((value, index, array) => {
		document.getElementsByClassName(value + '_num')[0].innerText = new Set(document.getElementsByClassName(value + '_k')).size;
	})
}

function renderLink() {
	var alist = document.getElementById("keylist").getElementsByTagName("tr");
	if (alist) {
		for (var i = 0; i < alist.length; i++) {
			var title = alist[i].childNodes[0].innerText;
			var key = alist[i].childNodes[2].innerText;
			var note = alist[i].childNodes[0].firstChild.attributes.value;
			
			if (key) {
				console.log(note);
				var a = document.createElement("a");
				a.setAttribute("target", "_blank");
				a.setAttribute("href", "http://tool.gitcafe.ink/sync/do.php?do=tousu&id=" + key + "&title=" + title);
				a.className = "ts";
				a.title = "若此key无效或违规，请举报";
				a.innerHTML = "&nbsp;&nbsp;&nbsp;举报";
				alist[i].childNodes[2].appendChild(a);

				var up = document.createElement("a");
				up.setAttribute("target", "_blank");
				up.setAttribute("href", "http://tool.gitcafe.ink/sync/do.php?do=update&id=" + key + "&title=" + title + "&note="+ note);
				up.className = "ts";
				up.title = "Key资源所有者可以更新信息";
				up.innerHTML = "&nbsp;&nbsp;&nbsp;更新";
				alist[i].childNodes[2].appendChild(up);
			}
		}
	}
}

window.onload = function() {
	var fenlei = ['dsj', 'dy', 'dm', 'se', 'jlp', 'zyp', 'jypx', 'dsp', 'hyyy', 'omyy', 'rhyy', 'yyrj', 'kfrj', 'czxt', 'wlrj', 'bgrj', 'ylrj', 'txrj', 'qtrj', 'mh', 'xs', 'cbs', 'zspx', 'qc', 'mnsg', 'fj', 'cw', 'qt'];
	set_key(fenlei);
	renderLink();
}
