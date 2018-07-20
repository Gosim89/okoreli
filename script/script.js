let gosim = 0;
let gospodja = 0;
let gile = 0;
let bankar = 0;
let miljan = 0;
let lope = 0;

let domPol = document.getElementsByClassName('domPol');
let domKra = document.getElementsByClassName('domKra');
let gosPol = document.getElementsByClassName('gosPol');
let gosKra = document.getElementsByClassName('gosKra');

let gosimKon = document.getElementsByClassName('gosimKon');
let gosimPk = document.getElementsByClassName('gosimPk');
let gosimGol = document.getElementsByClassName('gosimGol');
let gospodjaKon = document.getElementsByClassName('gospodjaKon');
let gospodjaPk = document.getElementsByClassName('gospodjaPk');
let gospodjaGol = document.getElementsByClassName('gospodjaGol');
let gileKon = document.getElementsByClassName('gileKon');
let gilePk = document.getElementsByClassName('gilePk');
let gileGol = document.getElementsByClassName('gileGol');
let bankarKon = document.getElementsByClassName('bankarKon');
let bankarPk = document.getElementsByClassName('bankarPk');
let bankarGol = document.getElementsByClassName('bankarGol');
let miljanKon = document.getElementsByClassName('miljanKon');
let miljanPk = document.getElementsByClassName('miljanPk');
let miljanGol = document.getElementsByClassName('miljanGol');
let lopeKon = document.getElementsByClassName('lopeKon');
let lopePk = document.getElementsByClassName('lopePk');
let lopeGol = document.getElementsByClassName('lopeGol');

let brojUtakmica = domPol.length;
document.getElementById('brojMeceva').innerHTML = brojUtakmica;

let tabela = document.getElementById('plasman');


function izracunajSkorGosimu(domPol, domKra, gosPol, gosKra, gosimKon, gosimPk, gosimGol, gosim) {
	for (let i = 0; i < brojUtakmica; i++) {
		let domPol1 = Number(domPol[i].innerText);
		let domKra1 = Number(domKra[i].innerText);
		let gosPol1 = Number(gosPol[i].innerText);
		let gosKra1 = Number(gosKra[i].innerText);
	if (i === 63) {
		if (gosimKon[i].innerText == 1 && domKra1 > gosKra1) {
			gosim +=6;
			document.getElementsByClassName("gosimKon")[i].style.background = "green";
		} else if ((gosimKon[i].innerText == 'x' || gosimKon[i].innerText == 'X') && domKra1 === gosKra1) {
			gosim +=6;
			document.getElementsByClassName("gosimKon")[i].style.background = "green";
		} else if (gosimKon[i].innerText == 2 && domKra1 < gosKra1) {
			gosim +=6;
			document.getElementsByClassName("gosimKon")[i].style.background = "green";
		}

		if (gosimPk[i].innerText == 11 && domKra1 > gosKra1 && domPol1 > gosPol1) {
			gosim +=12;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
		} else if ((gosimPk[i].innerText === 'x1' || gosimPk[i].innerText === 'X1') && domPol1 === gosPol1 && domKra1 > gosKra1) {
			gosim += 12;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
		} else if (gosimPk[i].innerText == 21 && domPol1 < gosPol1 && domKra1 > gosKra1) {
			gosim +=12;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
		} else if ((gosimPk[i].innerText === 'xx' || gosimPk[i].innerText === 'XX') && domPol1 == gosPol1 && domKra1 == gosKra1) {
			gosim +=12;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
	} else if ((gosimPk[i].innerText === '1x' || gosimPk[i].innerText === '1X') && domPol1 > gosPol1 && domKra1 == gosKra1) {
			gosim +=12;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
	} else if ((gosimPk[i].innerText === '2x' || gosimPk[i].innerText === '2X') && domPol1 < gosPol1 && domKra1 == gosKra1) {
			gosim +=12;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
	} else if (gosimPk[i].innerText == 22 && domPol1 < gosPol1 && domKra1 < gosKra1) {
			gosim +=12;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
	} else if ((gosimPk[i].innerText === 'x2' || gosimPk[i].innerText === 'X2') && domPol1 == gosPol1 && domKra1 < gosKra1) {
			gosim +=12;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
	} else if (gosimPk[i].innerText == 12 && domPol1 > gosPol1 && domKra1 < gosKra1) {
			gosim +=12;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
}

	if (gosimGol[i].innerText === '0-2' && domKra1 + gosKra1 < 3) {
		gosim +=6;
		document.getElementsByClassName("gosimGol")[i].style.background = "green";
	} else if (gosimGol[i].innerText === '2-3' && (domKra1 + gosKra1 === 2 || domKra1 + gosKra1 === 3)) {
		gosim +=6;
		document.getElementsByClassName("gosimGol")[i].style.background = "green";
	} else if (gosimGol[i].innerText === '3+' && domKra1 + gosKra1 > 2) {
		gosim +=6;
		document.getElementsByClassName("gosimGol")[i].style.background = "green";
	}
} else if (i > 47) {
		if (gosimKon[i].innerText == 1 && domKra1 > gosKra1) {
			gosim +=3;
			document.getElementsByClassName("gosimKon")[i].style.background = "green";
		} else if ((gosimKon[i].innerText == 'x' || gosimKon[i].innerText == 'X') && domKra1 === gosKra1) {
			gosim +=3;
			document.getElementsByClassName("gosimKon")[i].style.background = "green";
		} else if (gosimKon[i].innerText == 2 && domKra1 < gosKra1) {
			gosim +=3;
			document.getElementsByClassName("gosimKon")[i].style.background = "green";
		}

		if (gosimPk[i].innerText == 11 && domKra1 > gosKra1 && domPol1 > gosPol1) {
			gosim +=6;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
		} else if ((gosimPk[i].innerText === 'x1' || gosimPk[i].innerText === 'X1') && domPol1 === gosPol1 && domKra1 > gosKra1) {
			gosim += 6;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
		} else if (gosimPk[i].innerText == 21 && domPol1 < gosPol1 && domKra1 > gosKra1) {
			gosim +=6;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
		} else if ((gosimPk[i].innerText === 'xx' || gosimPk[i].innerText === 'XX') && domPol1 == gosPol1 && domKra1 == gosKra1) {
			gosim +=6;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
	} else if ((gosimPk[i].innerText === '1x' || gosimPk[i].innerText === '1X') && domPol1 > gosPol1 && domKra1 == gosKra1) {
			gosim +=6;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
	} else if ((gosimPk[i].innerText === '2x' || gosimPk[i].innerText === '2X') && domPol1 < gosPol1 && domKra1 == gosKra1) {
			gosim +=6;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
	} else if (gosimPk[i].innerText == 22 && domPol1 < gosPol1 && domKra1 < gosKra1) {
			gosim +=6;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
	} else if ((gosimPk[i].innerText === 'x2' || gosimPk[i].innerText === 'X2') && domPol1 == gosPol1 && domKra1 < gosKra1) {
			gosim +=6;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
	} else if (gosimPk[i].innerText == 12 && domPol1 > gosPol1 && domKra1 < gosKra1) {
			gosim +=6;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
}

	if (gosimGol[i].innerText === '0-2' && domKra1 + gosKra1 < 3) {
		gosim +=3;
		document.getElementsByClassName("gosimGol")[i].style.background = "green";
	} else if (gosimGol[i].innerText === '2-3' && (domKra1 + gosKra1 === 2 || domKra1 + gosKra1 === 3)) {
		gosim +=3;
		document.getElementsByClassName("gosimGol")[i].style.background = "green";
	} else if (gosimGol[i].innerText === '3+' && domKra1 + gosKra1 > 2) {
		gosim +=3;
		document.getElementsByClassName("gosimGol")[i].style.background = "green";
	}
}
else {
		if (gosimKon[i].innerText == 1 && domKra1 > gosKra1) {
			gosim +=2;
			document.getElementsByClassName("gosimKon")[i].style.background = "green";
		} else if ((gosimKon[i].innerText == 'x' || gosimKon[i].innerText == 'X') && domKra1 === gosKra1) {
			gosim +=2;
			document.getElementsByClassName("gosimKon")[i].style.background = "green";
		} else if (gosimKon[i].innerText == 2 && domKra1 < gosKra1) {
			gosim +=2;
			document.getElementsByClassName("gosimKon")[i].style.background = "green";
		}

		if (gosimPk[i].innerText == 11 && domKra1 > gosKra1 && domPol1 > gosPol1) {
			gosim +=4;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
		} else if ((gosimPk[i].innerText === 'x1' || gosimPk[i].innerText === 'X1') && domPol1 === gosPol1 && domKra1 > gosKra1) {
			gosim +=4;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
		} else if (gosimPk[i].innerText == 21 && domPol1 < gosPol1 && domKra1 > gosKra1) {
			gosim +=4;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
		} else if ((gosimPk[i].innerText === 'xx' || gosimPk[i].innerText === 'XX') && domPol1 == gosPol1 && domKra1 == gosKra1) {
			gosim +=4;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
	} else if ((gosimPk[i].innerText === '1x' || gosimPk[i].innerText === '1X') && domPol1 > gosPol1 && domKra1 == gosKra1) {
			gosim +=4;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
	} else if ((gosimPk[i].innerText === '2x' || gosimPk[i].innerText === '2X') && domPol1 < gosPol1 && domKra1 == gosKra1) {
			gosim +=4;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
	} else if (gosimPk[i].innerText == 22 && domPol1 < gosPol1 && domKra1 < gosKra1) {
			gosim +=4;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
	} else if ((gosimPk[i].innerText === 'x2' || gosimPk[i].innerText === 'X2') && domPol1 == gosPol1 && domKra1 < gosKra1) {
			gosim +=4;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
	} else if (gosimPk[i].innerText == 12 && domPol1 > gosPol1 && domKra1 < gosKra1) {
			gosim +=4;
			document.getElementsByClassName("gosimPk")[i].style.background = "green";
}

	if (gosimGol[i].innerText === '0-2' && domKra1 + gosKra1 < 3) {
		gosim +=2;
		document.getElementsByClassName("gosimGol")[i].style.background = "green";
	} else if (gosimGol[i].innerText === '2-3' && (domKra1 + gosKra1 === 2 || domKra1 + gosKra1 === 3)) {
		gosim +=2;
		document.getElementsByClassName("gosimGol")[i].style.background = "green";
	} else if (gosimGol[i].innerText === '3+' && domKra1 + gosKra1 > 2) {
		gosim +=2;
		document.getElementsByClassName("gosimGol")[i].style.background = "green";
	}
}
}
return gosim;
}

function izracunajSkorGospodji(domPol, domKra, gosPol, gosKra, gospodjaKon, gospodjaPk, gospodjaGol, gospodja) {
	for (let i = 0; i < brojUtakmica; i++) {
		let domPol1 = Number(domPol[i].innerText);
		let domKra1 = Number(domKra[i].innerText);
		let gosPol1 = Number(gosPol[i].innerText);
		let gosKra1 = Number(gosKra[i].innerText);
		if (i === 63) {
		if (gospodjaKon[i].innerText == 1 && domKra1 > gosKra1) {
			gospodja +=6;
			document.getElementsByClassName("gospodjaKon")[i].style.background = "green";
		} else if ((gospodjaKon[i].innerText == 'x' || gospodjaKon[i].innerText == 'X') && domKra1 === gosKra1) {
			gospodja +=6;
			document.getElementsByClassName("gospodjaKon")[i].style.background = "green";
		} else if (gospodjaKon[i].innerText == 2 && domKra1 < gosKra1) {
			gospodja +=6;
			document.getElementsByClassName("gospodjaKon")[i].style.background = "green";
		}

		if (gospodjaPk[i].innerText == 11 && domKra1 > gosKra1 && domPol1 > gosPol1) {
			gospodja +=12;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
		} else if ((gospodjaPk[i].innerText === 'x1' || gospodjaPk[i].innerText === 'X1') && domPol1 === gosPol1 && domKra1 > gosKra1) {
			gospodja += 12;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
		} else if (gospodjaPk[i].innerText == 21 && domPol1 < gosPol1 && domKra1 > gosKra1) {
			gospodja +=12;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
		} else if ((gospodjaPk[i].innerText === 'xx' || gospodjaPk[i].innerText === 'XX') && domPol1 == gosPol1 && domKra1 == gosKra1) {
			gospodja +=12;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
	} else if ((gospodjaPk[i].innerText === '1x' || gospodjaPk[i].innerText === '1X') && domPol1 > gosPol1 && domKra1 == gosKra1) {
			gospodja +=12;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
	} else if ((gospodjaPk[i].innerText === '2x' || gospodjaPk[i].innerText === '2X') && domPol1 < gosPol1 && domKra1 == gosKra1) {
			gospodja +=12;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
	} else if (gospodjaPk[i].innerText == 22 && domPol1 < gosPol1 && domKra1 < gosKra1) {
			gospodja +=12;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
	} else if ((gospodjaPk[i].innerText === 'x2' || gospodjaPk[i].innerText === 'X2') && domPol1 == gosPol1 && domKra1 < gosKra1) {
			gospodja +=12;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
	} else if (gospodjaPk[i].innerText == 12 && domPol1 > gosPol1 && domKra1 < gosKra1) {
			gospodja +=12;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
}

	if (gospodjaGol[i].innerText === '0-2' && domKra1 + gosKra1 < 3) {
		gospodja +=6;
		document.getElementsByClassName("gospodjaGol")[i].style.background = "green";
	} else if (gospodjaGol[i].innerText === '2-3' && (domKra1 + gosKra1 === 2 || domKra1 + gosKra1 === 3)) {
		gospodja +=6;
		document.getElementsByClassName("gospodjaGol")[i].style.background = "green";
	} else if (gospodjaGol[i].innerText === '3+' && domKra1 + gosKra1 > 2) {
		gospodja +=6;
		document.getElementsByClassName("gospodjaGol")[i].style.background = "green";
	}
} else if (i > 47) {
		if (gospodjaKon[i].innerText == 1 && domKra1 > gosKra1) {
			gospodja +=3;
			document.getElementsByClassName("gospodjaKon")[i].style.background = "green";
		} else if ((gospodjaKon[i].innerText == 'x' || gospodjaKon[i].innerText == 'X') && domKra1 === gosKra1) {
			gospodja +=3;
			document.getElementsByClassName("gospodjaKon")[i].style.background = "green";
		} else if (gospodjaKon[i].innerText == 2 && domKra1 < gosKra1) {
			gospodja +=3;
			document.getElementsByClassName("gospodjaKon")[i].style.background = "green";
		}

		if (gospodjaPk[i].innerText == 11 && domKra1 > gosKra1 && domPol1 > gosPol1) {
			gospodja +=6;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
		} else if ((gospodjaPk[i].innerText === 'x1' || gospodjaPk[i].innerText === 'X1') && domPol1 === gosPol1 && domKra1 > gosKra1) {
			gospodja += 6;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
		} else if (gospodjaPk[i].innerText == 21 && domPol1 < gosPol1 && domKra1 > gosKra1) {
			gospodja +=6;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
		} else if ((gospodjaPk[i].innerText === 'xx' || gospodjaPk[i].innerText === 'XX') && domPol1 == gosPol1 && domKra1 == gosKra1) {
			gospodja +=6;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
	} else if ((gospodjaPk[i].innerText === '1x' || gospodjaPk[i].innerText === '1X') && domPol1 > gosPol1 && domKra1 == gosKra1) {
			gospodja +=6;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
	} else if ((gospodjaPk[i].innerText === '2x' || gospodjaPk[i].innerText === '2X') && domPol1 < gosPol1 && domKra1 == gosKra1) {
			gospodja +=6;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
	} else if (gospodjaPk[i].innerText == 22 && domPol1 < gosPol1 && domKra1 < gosKra1) {
			gospodja +=6;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
	} else if ((gospodjaPk[i].innerText === 'x2' || gospodjaPk[i].innerText === 'X2') && domPol1 == gosPol1 && domKra1 < gosKra1) {
			gospodja +=6;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
	} else if (gospodjaPk[i].innerText == 12 && domPol1 > gosPol1 && domKra1 < gosKra1) {
			gospodja +=6;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
}

	if (gospodjaGol[i].innerText === '0-2' && domKra1 + gosKra1 < 3) {
		gospodja +=3;
		document.getElementsByClassName("gospodjaGol")[i].style.background = "green";
	} else if (gospodjaGol[i].innerText === '2-3' && (domKra1 + gosKra1 === 2 || domKra1 + gosKra1 === 3)) {
		gospodja +=3;
		document.getElementsByClassName("gospodjaGol")[i].style.background = "green";
	} else if (gospodjaGol[i].innerText === '3+' && domKra1 + gosKra1 > 2) {
		gospodja +=3;
		document.getElementsByClassName("gospodjaGol")[i].style.background = "green";
	}
}
else {
		if (gospodjaKon[i].innerText == 1 && domKra1 > gosKra1) {
			gospodja +=2;
			document.getElementsByClassName("gospodjaKon")[i].style.background = "green";
		} else if ((gospodjaKon[i].innerText == 'x' || gospodjaKon[i].innerText == 'X') && domKra1 === gosKra1) {
			gospodja +=2;
			document.getElementsByClassName("gospodjaKon")[i].style.background = "green";
		} else if (gospodjaKon[i].innerText == 2 && domKra1 < gosKra1) {
			gospodja +=2;
			document.getElementsByClassName("gospodjaKon")[i].style.background = "green";
		}

		if (gospodjaPk[i].innerText == 11 && domKra1 > gosKra1 && domPol1 > gosPol1) {
			gospodja +=4;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
		} else if ((gospodjaPk[i].innerText === 'x1' || gospodjaPk[i].innerText === 'X1') && domPol1 === gosPol1 && domKra1 > gosKra1) {
			gospodja +=4;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
		} else if (gospodjaPk[i].innerText == 21 && domPol1 < gosPol1 && domKra1 > gosKra1) {
			gospodja +=4;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
		} else if ((gospodjaPk[i].innerText === 'xx' || gospodjaPk[i].innerText === 'XX') && domPol1 == gosPol1 && domKra1 == gosKra1) {
			gospodja +=4;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
	} else if ((gospodjaPk[i].innerText === '1x' || gospodjaPk[i].innerText === '1X') && domPol1 > gosPol1 && domKra1 == gosKra1) {
			gospodja +=4;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
	} else if ((gospodjaPk[i].innerText === '2x' || gospodjaPk[i].innerText === '2X') && domPol1 < gosPol1 && domKra1 == gosKra1) {
			gospodja +=4;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
	} else if (gospodjaPk[i].innerText == 22 && domPol1 < gosPol1 && domKra1 < gosKra1) {
			gospodja +=4;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
	} else if ((gospodjaPk[i].innerText === 'x2' || gospodjaPk[i].innerText === 'X2') && domPol1 == gosPol1 && domKra1 < gosKra1) {
			gospodja +=4;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
	} else if (gospodjaPk[i].innerText == 12 && domPol1 > gosPol1 && domKra1 < gosKra1) {
			gospodja +=4;
			document.getElementsByClassName("gospodjaPk")[i].style.background = "green";
}

	if (gospodjaGol[i].innerText === '0-2' && domKra1 + gosKra1 < 3) {
		gospodja +=2;
		document.getElementsByClassName("gospodjaGol")[i].style.background = "green";
	} else if (gospodjaGol[i].innerText === '2-3' && (domKra1 + gosKra1 === 2 || domKra1 + gosKra1 === 3)) {
		gospodja +=2;
		document.getElementsByClassName("gospodjaGol")[i].style.background = "green";
	} else if (gospodjaGol[i].innerText === '3+' && domKra1 + gosKra1 > 2) {
		gospodja +=2;
		document.getElementsByClassName("gospodjaGol")[i].style.background = "green";
	}
}
}
return gospodja;
}

function izracunajSkorGiletu(domPol, domKra, gosPol, gosKra, gileKon, gilePk, gileGol, gile) {
	for (let i = 0; i < brojUtakmica; i++) {
		let domPol1 = Number(domPol[i].innerText);
		let domKra1 = Number(domKra[i].innerText);
		let gosPol1 = Number(gosPol[i].innerText);
		let gosKra1 = Number(gosKra[i].innerText);
		if (i === 63) {
		if (gileKon[i].innerText == 1 && domKra1 > gosKra1) {
			gile +=6;
			document.getElementsByClassName("gileKon")[i].style.background = "green";
		} else if ((gileKon[i].innerText == 'x' || gileKon[i].innerText == 'X') && domKra1 === gosKra1) {
			gile +=6;
			document.getElementsByClassName("gileKon")[i].style.background = "green";
		} else if (gileKon[i].innerText == 2 && domKra1 < gosKra1) {
			gile +=6;
			document.getElementsByClassName("gileKon")[i].style.background = "green";
		}

		if (gilePk[i].innerText == 11 && domKra1 > gosKra1 && domPol1 > gosPol1) {
			gile +=12;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
		} else if ((gilePk[i].innerText === 'x1' || gilePk[i].innerText === 'X1') && domPol1 === gosPol1 && domKra1 > gosKra1) {
			gile += 12;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
		} else if (gilePk[i].innerText == 21 && domPol1 < gosPol1 && domKra1 > gosKra1) {
			gile +=12;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
		} else if ((gilePk[i].innerText === 'xx' || gilePk[i].innerText === 'XX') && domPol1 == gosPol1 && domKra1 == gosKra1) {
			gile +=12;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
	} else if ((gilePk[i].innerText === '1x' || gilePk[i].innerText === '1X') && domPol1 > gosPol1 && domKra1 == gosKra1) {
			gile +=12;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
	} else if ((gilePk[i].innerText === '2x' || gilePk[i].innerText === '2X') && domPol1 < gosPol1 && domKra1 == gosKra1) {
			gile +=12;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
	} else if (gilePk[i].innerText == 22 && domPol1 < gosPol1 && domKra1 < gosKra1) {
			gile +=12;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
	} else if ((gilePk[i].innerText === 'x2' || gilePk[i].innerText === 'X2') && domPol1 == gosPol1 && domKra1 < gosKra1) {
			gile +=12;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
	} else if (gilePk[i].innerText == 12 && domPol1 > gosPol1 && domKra1 < gosKra1) {
			gile +=12;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
}

	if (gileGol[i].innerText === '0-2' && domKra1 + gosKra1 < 3) {
		gile +=6;
		document.getElementsByClassName("gileGol")[i].style.background = "green";
	} else if (gileGol[i].innerText === '2-3' && (domKra1 + gosKra1 === 2 || domKra1 + gosKra1 === 3)) {
		gile +=6;
		document.getElementsByClassName("gileGol")[i].style.background = "green";
	} else if (gileGol[i].innerText === '3+' && domKra1 + gosKra1 > 2) {
		gile +=6;
		document.getElementsByClassName("gileGol")[i].style.background = "green";
	}
} else if (i > 47) {
		if (gileKon[i].innerText == 1 && domKra1 > gosKra1) {
			gile +=3;
			document.getElementsByClassName("gileKon")[i].style.background = "green";
		} else if ((gileKon[i].innerText == 'x' || gileKon[i].innerText == 'X') && domKra1 === gosKra1) {
			gile +=3;
			document.getElementsByClassName("gileKon")[i].style.background = "green";
		} else if (gileKon[i].innerText == 2 && domKra1 < gosKra1) {
			gile +=3;
			document.getElementsByClassName("gileKon")[i].style.background = "green";
		}

		if (gilePk[i].innerText == 11 && domKra1 > gosKra1 && domPol1 > gosPol1) {
			gile +=6;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
		} else if ((gilePk[i].innerText === 'x1' || gilePk[i].innerText === 'X1') && domPol1 === gosPol1 && domKra1 > gosKra1) {
			gile += 6;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
		} else if (gilePk[i].innerText == 21 && domPol1 < gosPol1 && domKra1 > gosKra1) {
			gile +=6;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
		} else if ((gilePk[i].innerText === 'xx' || gilePk[i].innerText === 'XX') && domPol1 == gosPol1 && domKra1 == gosKra1) {
			gile +=6;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
	} else if ((gilePk[i].innerText === '1x' || gilePk[i].innerText === '1X') && domPol1 > gosPol1 && domKra1 == gosKra1) {
			gile +=6;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
	} else if ((gilePk[i].innerText === '2x' || gilePk[i].innerText === '2X') && domPol1 < gosPol1 && domKra1 == gosKra1) {
			gile +=6;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
	} else if (gilePk[i].innerText == 22 && domPol1 < gosPol1 && domKra1 < gosKra1) {
			gile +=6;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
	} else if ((gilePk[i].innerText === 'x2' || gilePk[i].innerText === 'X2') && domPol1 == gosPol1 && domKra1 < gosKra1) {
			gile +=6;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
	} else if (gilePk[i].innerText == 12 && domPol1 > gosPol1 && domKra1 < gosKra1) {
			gile +=6;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
}

	if (gileGol[i].innerText === '0-2' && domKra1 + gosKra1 < 3) {
		gile +=3;
		document.getElementsByClassName("gileGol")[i].style.background = "green";
	} else if (gileGol[i].innerText === '2-3' && (domKra1 + gosKra1 === 2 || domKra1 + gosKra1 === 3)) {
		gile +=3;
		document.getElementsByClassName("gileGol")[i].style.background = "green";
	} else if (gileGol[i].innerText === '3+' && domKra1 + gosKra1 > 2) {
		gile +=3;
		document.getElementsByClassName("gileGol")[i].style.background = "green";
	}
}
else {
		if (gileKon[i].innerText == 1 && domKra1 > gosKra1) {
			gile +=2;
			document.getElementsByClassName("gileKon")[i].style.background = "green";
		} else if ((gileKon[i].innerText == 'x' || gileKon[i].innerText == 'X') && domKra1 === gosKra1) {
			gile +=2;
			document.getElementsByClassName("gileKon")[i].style.background = "green";
		} else if (gileKon[i].innerText == 2 && domKra1 < gosKra1) {
			gile +=2;
			document.getElementsByClassName("gileKon")[i].style.background = "green";
		}

		if (gilePk[i].innerText == 11 && domKra1 > gosKra1 && domPol1 > gosPol1) {
			gile +=4;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
		} else if ((gilePk[i].innerText === 'x1' || gilePk[i].innerText === 'X1') && domPol1 === gosPol1 && domKra1 > gosKra1) {
			gile +=4;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
		} else if (gilePk[i].innerText == 21 && domPol1 < gosPol1 && domKra1 > gosKra1) {
			gile +=4;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
		} else if ((gilePk[i].innerText === 'xx' || gilePk[i].innerText === 'XX') && domPol1 == gosPol1 && domKra1 == gosKra1) {
			gile +=4;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
	} else if ((gilePk[i].innerText === '1x' || gilePk[i].innerText === '1X') && domPol1 > gosPol1 && domKra1 == gosKra1) {
			gile +=4;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
	} else if ((gilePk[i].innerText === '2x' || gilePk[i].innerText === '2X') && domPol1 < gosPol1 && domKra1 == gosKra1) {
			gile +=4;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
	} else if (gilePk[i].innerText == 22 && domPol1 < gosPol1 && domKra1 < gosKra1) {
			gile +=4;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
	} else if ((gilePk[i].innerText === 'x2' || gilePk[i].innerText === 'X2') && domPol1 == gosPol1 && domKra1 < gosKra1) {
			gile +=4;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
	} else if (gilePk[i].innerText == 12 && domPol1 > gosPol1 && domKra1 < gosKra1) {
			gile +=4;
			document.getElementsByClassName("gilePk")[i].style.background = "green";
}

	if (gileGol[i].innerText === '0-2' && domKra1 + gosKra1 < 3) {
		gile +=2;
		document.getElementsByClassName("gileGol")[i].style.background = "green";
	} else if (gileGol[i].innerText === '2-3' && (domKra1 + gosKra1 === 2 || domKra1 + gosKra1 === 3)) {
		gile +=2;
		document.getElementsByClassName("gileGol")[i].style.background = "green";
	} else if (gileGol[i].innerText === '3+' && domKra1 + gosKra1 > 2) {
		gile +=2;
		document.getElementsByClassName("gileGol")[i].style.background = "green";
	}
}
}
return gile;
}

function izracunajSkorBankaru(domPol, domKra, gosPol, gosKra, bankarKon, bankarPk, bankarGol, bankar) {
	for (let i = 0; i < brojUtakmica; i++) {
		let domPol1 = Number(domPol[i].innerText);
		let domKra1 = Number(domKra[i].innerText);
		let gosPol1 = Number(gosPol[i].innerText);
		let gosKra1 = Number(gosKra[i].innerText);
		if (i === 63) {
		if (bankarKon[i].innerText == 1 && domKra1 > gosKra1) {
			bankar +=6;
			document.getElementsByClassName("bankarKon")[i].style.background = "green";
		} else if ((bankarKon[i].innerText == 'x' || bankarKon[i].innerText == 'X') && domKra1 === gosKra1) {
			bankar +=6;
			document.getElementsByClassName("bankarKon")[i].style.background = "green";
		} else if (bankarKon[i].innerText == 2 && domKra1 < gosKra1) {
			bankar +=6;
			document.getElementsByClassName("bankarKon")[i].style.background = "green";
		}

		if (bankarPk[i].innerText == 11 && domKra1 > gosKra1 && domPol1 > gosPol1) {
			bankar +=12;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
		} else if ((bankarPk[i].innerText === 'x1' || bankarPk[i].innerText === 'X1') && domPol1 === gosPol1 && domKra1 > gosKra1) {
			bankar += 12;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
		} else if (bankarPk[i].innerText == 21 && domPol1 < gosPol1 && domKra1 > gosKra1) {
			bankar +=12;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
		} else if ((bankarPk[i].innerText === 'xx' || bankarPk[i].innerText === 'XX') && domPol1 == gosPol1 && domKra1 == gosKra1) {
			bankar +=12;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
	} else if ((bankarPk[i].innerText === '1x' || bankarPk[i].innerText === '1X') && domPol1 > gosPol1 && domKra1 == gosKra1) {
			bankar +=12;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
	} else if ((bankarPk[i].innerText === '2x' || bankarPk[i].innerText === '2X') && domPol1 < gosPol1 && domKra1 == gosKra1) {
			bankar +=12;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
	} else if (bankarPk[i].innerText == 22 && domPol1 < gosPol1 && domKra1 < gosKra1) {
			bankar +=12;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
	} else if ((bankarPk[i].innerText === 'x2' || bankarPk[i].innerText === 'X2') && domPol1 == gosPol1 && domKra1 < gosKra1) {
			bankar +=12;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
	} else if (bankarPk[i].innerText == 12 && domPol1 > gosPol1 && domKra1 < gosKra1) {
			bankar +=12;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
}

	if (bankarGol[i].innerText === '0-2' && domKra1 + gosKra1 < 3) {
		bankar +=6;
		document.getElementsByClassName("bankarGol")[i].style.background = "green";
	} else if (bankarGol[i].innerText === '2-3' && (domKra1 + gosKra1 === 2 || domKra1 + gosKra1 === 3)) {
		bankar +=6;
		document.getElementsByClassName("bankarGol")[i].style.background = "green";
	} else if (bankarGol[i].innerText === '3+' && domKra1 + gosKra1 > 2) {
		bankar +=6;
		document.getElementsByClassName("bankarGol")[i].style.background = "green";
	}
} else if (i > 47) {
		if (bankarKon[i].innerText == 1 && domKra1 > gosKra1) {
			bankar +=3;
			document.getElementsByClassName("bankarKon")[i].style.background = "green";
		} else if ((bankarKon[i].innerText == 'x' || bankarKon[i].innerText == 'X') && domKra1 === gosKra1) {
			bankar +=3;
			document.getElementsByClassName("bankarKon")[i].style.background = "green";
		} else if (bankarKon[i].innerText == 2 && domKra1 < gosKra1) {
			bankar +=3;
			document.getElementsByClassName("bankarKon")[i].style.background = "green";
		}

		if (bankarPk[i].innerText == 11 && domKra1 > gosKra1 && domPol1 > gosPol1) {
			bankar +=6;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
		} else if ((bankarPk[i].innerText === 'x1' || bankarPk[i].innerText === 'X1') && domPol1 === gosPol1 && domKra1 > gosKra1) {
			bankar += 6;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
		} else if (bankarPk[i].innerText == 21 && domPol1 < gosPol1 && domKra1 > gosKra1) {
			bankar +=6;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
		} else if ((bankarPk[i].innerText === 'xx' || bankarPk[i].innerText === 'XX') && domPol1 == gosPol1 && domKra1 == gosKra1) {
			bankar +=6;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
	} else if ((bankarPk[i].innerText === '1x' || bankarPk[i].innerText === '1X') && domPol1 > gosPol1 && domKra1 == gosKra1) {
			bankar +=6;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
	} else if ((bankarPk[i].innerText === '2x' || bankarPk[i].innerText === '2X') && domPol1 < gosPol1 && domKra1 == gosKra1) {
			bankar +=6;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
	} else if (bankarPk[i].innerText == 22 && domPol1 < gosPol1 && domKra1 < gosKra1) {
			bankar +=6;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
	} else if ((bankarPk[i].innerText === 'x2' || bankarPk[i].innerText === 'X2') && domPol1 == gosPol1 && domKra1 < gosKra1) {
			bankar +=6;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
	} else if (bankarPk[i].innerText == 12 && domPol1 > gosPol1 && domKra1 < gosKra1) {
			bankar +=6;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
}

	if (bankarGol[i].innerText === '0-2' && domKra1 + gosKra1 < 3) {
		bankar +=3;
		document.getElementsByClassName("bankarGol")[i].style.background = "green";
	} else if (bankarGol[i].innerText === '2-3' && (domKra1 + gosKra1 === 2 || domKra1 + gosKra1 === 3)) {
		bankar +=3;
		document.getElementsByClassName("bankarGol")[i].style.background = "green";
	} else if (bankarGol[i].innerText === '3+' && domKra1 + gosKra1 > 2) {
		bankar +=3;
		document.getElementsByClassName("bankarGol")[i].style.background = "green";
	}
}
else {
		if (bankarKon[i].innerText == 1 && domKra1 > gosKra1) {
			bankar +=2;
			document.getElementsByClassName("bankarKon")[i].style.background = "green";
		} else if ((bankarKon[i].innerText == 'x' || bankarKon[i].innerText == 'X') && domKra1 === gosKra1) {
			bankar +=2;
			document.getElementsByClassName("bankarKon")[i].style.background = "green";
		} else if (bankarKon[i].innerText == 2 && domKra1 < gosKra1) {
			bankar +=2;
			document.getElementsByClassName("bankarKon")[i].style.background = "green";
		}

		if (bankarPk[i].innerText == 11 && domKra1 > gosKra1 && domPol1 > gosPol1) {
			bankar +=4;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
		} else if ((bankarPk[i].innerText === 'x1' || bankarPk[i].innerText === 'X1') && domPol1 === gosPol1 && domKra1 > gosKra1) {
			bankar +=4;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
		} else if (bankarPk[i].innerText == 21 && domPol1 < gosPol1 && domKra1 > gosKra1) {
			bankar +=4;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
		} else if ((bankarPk[i].innerText === 'xx' || bankarPk[i].innerText === 'XX') && domPol1 == gosPol1 && domKra1 == gosKra1) {
			bankar +=4;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
	} else if ((bankarPk[i].innerText === '1x' || bankarPk[i].innerText === '1X') && domPol1 > gosPol1 && domKra1 == gosKra1) {
			bankar +=4;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
	} else if ((bankarPk[i].innerText === '2x' || bankarPk[i].innerText === '2X') && domPol1 < gosPol1 && domKra1 == gosKra1) {
			bankar +=4;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
	} else if (bankarPk[i].innerText == 22 && domPol1 < gosPol1 && domKra1 < gosKra1) {
			bankar +=4;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
	} else if ((bankarPk[i].innerText === 'x2' || bankarPk[i].innerText === 'X2') && domPol1 == gosPol1 && domKra1 < gosKra1) {
			bankar +=4;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
	} else if (bankarPk[i].innerText == 12 && domPol1 > gosPol1 && domKra1 < gosKra1) {
			bankar +=4;
			document.getElementsByClassName("bankarPk")[i].style.background = "green";
}

	if (bankarGol[i].innerText === '0-2' && domKra1 + gosKra1 < 3) {
		bankar +=2;
		document.getElementsByClassName("bankarGol")[i].style.background = "green";
	} else if (bankarGol[i].innerText === '2-3' && (domKra1 + gosKra1 === 2 || domKra1 + gosKra1 === 3)) {
		bankar +=2;
		document.getElementsByClassName("bankarGol")[i].style.background = "green";
	} else if (bankarGol[i].innerText === '3+' && domKra1 + gosKra1 > 2) {
		bankar +=2;
		document.getElementsByClassName("bankarGol")[i].style.background = "green";
	}
}
}
return bankar;
}

function izracunajSkorMiljanu(domPol, domKra, gosPol, gosKra, miljanKon, miljanPk, miljanGol, miljan) {
	for (let i = 0; i < brojUtakmica; i++) {
		let domPol1 = Number(domPol[i].innerText);
		let domKra1 = Number(domKra[i].innerText);
		let gosPol1 = Number(gosPol[i].innerText);
		let gosKra1 = Number(gosKra[i].innerText);
		if (i === 63) {
		if (miljanKon[i].innerText == 1 && domKra1 > gosKra1) {
			miljan +=6;
			document.getElementsByClassName("miljanKon")[i].style.background = "green";
		} else if ((miljanKon[i].innerText == 'x' || miljanKon[i].innerText == 'X') && domKra1 === gosKra1) {
			miljan +=6;
			document.getElementsByClassName("miljanKon")[i].style.background = "green";
		} else if (miljanKon[i].innerText == 2 && domKra1 < gosKra1) {
			miljan +=6;
			document.getElementsByClassName("miljanKon")[i].style.background = "green";
		}

		if (miljanPk[i].innerText == 11 && domKra1 > gosKra1 && domPol1 > gosPol1) {
			miljan +=12;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
		} else if ((miljanPk[i].innerText === 'x1' || miljanPk[i].innerText === 'X1') && domPol1 === gosPol1 && domKra1 > gosKra1) {
			miljan += 12;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
		} else if (miljanPk[i].innerText == 21 && domPol1 < gosPol1 && domKra1 > gosKra1) {
			miljan +=12;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
		} else if ((miljanPk[i].innerText === 'xx' || miljanPk[i].innerText === 'XX') && domPol1 == gosPol1 && domKra1 == gosKra1) {
			miljan +=12;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
	} else if ((miljanPk[i].innerText === '1x' || miljanPk[i].innerText === '1X') && domPol1 > gosPol1 && domKra1 == gosKra1) {
			miljan +=12;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
	} else if ((miljanPk[i].innerText === '2x' || miljanPk[i].innerText === '2X') && domPol1 < gosPol1 && domKra1 == gosKra1) {
			miljan +=12;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
	} else if (miljanPk[i].innerText == 22 && domPol1 < gosPol1 && domKra1 < gosKra1) {
			miljan +=12;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
	} else if ((miljanPk[i].innerText === 'x2' || miljanPk[i].innerText === 'X2') && domPol1 == gosPol1 && domKra1 < gosKra1) {
			miljan +=12;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
	} else if (miljanPk[i].innerText == 12 && domPol1 > gosPol1 && domKra1 < gosKra1) {
			miljan +=12;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
}

	if (miljanGol[i].innerText === '0-2' && domKra1 + gosKra1 < 3) {
		miljan +=6;
		document.getElementsByClassName("miljanGol")[i].style.background = "green";
	} else if (miljanGol[i].innerText === '2-3' && (domKra1 + gosKra1 === 2 || domKra1 + gosKra1 === 3)) {
		miljan +=6;
		document.getElementsByClassName("miljanGol")[i].style.background = "green";
	} else if (miljanGol[i].innerText === '3+' && domKra1 + gosKra1 > 2) {
		miljan +=6;
		document.getElementsByClassName("miljanGol")[i].style.background = "green";
	}
} else if (i > 47) {
		if (miljanKon[i].innerText == 1 && domKra1 > gosKra1) {
			miljan +=3;
			document.getElementsByClassName("miljanKon")[i].style.background = "green";
		} else if ((miljanKon[i].innerText == 'x' || miljanKon[i].innerText == 'X') && domKra1 === gosKra1) {
			miljan +=3;
			document.getElementsByClassName("miljanKon")[i].style.background = "green";
		} else if (miljanKon[i].innerText == 2 && domKra1 < gosKra1) {
			miljan +=3;
			document.getElementsByClassName("miljanKon")[i].style.background = "green";
		}

		if (miljanPk[i].innerText == 11 && domKra1 > gosKra1 && domPol1 > gosPol1) {
			miljan +=6;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
		} else if ((miljanPk[i].innerText === 'x1' || miljanPk[i].innerText === 'X1') && domPol1 === gosPol1 && domKra1 > gosKra1) {
			miljan += 6;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
		} else if (miljanPk[i].innerText == 21 && domPol1 < gosPol1 && domKra1 > gosKra1) {
			miljan +=6;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
		} else if ((miljanPk[i].innerText === 'xx' || miljanPk[i].innerText === 'XX') && domPol1 == gosPol1 && domKra1 == gosKra1) {
			miljan +=6;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
	} else if ((miljanPk[i].innerText === '1x' || miljanPk[i].innerText === '1X') && domPol1 > gosPol1 && domKra1 == gosKra1) {
			miljan +=6;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
	} else if ((miljanPk[i].innerText === '2x' || miljanPk[i].innerText === '2X') && domPol1 < gosPol1 && domKra1 == gosKra1) {
			miljan +=6;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
	} else if (miljanPk[i].innerText == 22 && domPol1 < gosPol1 && domKra1 < gosKra1) {
			miljan +=6;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
	} else if ((miljanPk[i].innerText === 'x2' || miljanPk[i].innerText === 'X2') && domPol1 == gosPol1 && domKra1 < gosKra1) {
			miljan +=6;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
	} else if (miljanPk[i].innerText == 12 && domPol1 > gosPol1 && domKra1 < gosKra1) {
			miljan +=6;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
}

	if (miljanGol[i].innerText === '0-2' && domKra1 + gosKra1 < 3) {
		miljan +=3;
		document.getElementsByClassName("miljanGol")[i].style.background = "green";
	} else if (miljanGol[i].innerText === '2-3' && (domKra1 + gosKra1 === 2 || domKra1 + gosKra1 === 3)) {
		miljan +=3;
		document.getElementsByClassName("miljanGol")[i].style.background = "green";
	} else if (miljanGol[i].innerText === '3+' && domKra1 + gosKra1 > 2) {
		miljan +=3;
		document.getElementsByClassName("miljanGol")[i].style.background = "green";
	}
}
else {
		if (miljanKon[i].innerText == 1 && domKra1 > gosKra1) {
			miljan +=2;
			document.getElementsByClassName("miljanKon")[i].style.background = "green";
		} else if ((miljanKon[i].innerText == 'x' || miljanKon[i].innerText == 'X') && domKra1 === gosKra1) {
			miljan +=2;
			document.getElementsByClassName("miljanKon")[i].style.background = "green";
		} else if (miljanKon[i].innerText == 2 && domKra1 < gosKra1) {
			miljan +=2;
			document.getElementsByClassName("miljanKon")[i].style.background = "green";
		}

		if (miljanPk[i].innerText == 11 && domKra1 > gosKra1 && domPol1 > gosPol1) {
			miljan +=4;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
		} else if ((miljanPk[i].innerText === 'x1' || miljanPk[i].innerText === 'X1') && domPol1 === gosPol1 && domKra1 > gosKra1) {
			miljan +=4;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
		} else if (miljanPk[i].innerText == 21 && domPol1 < gosPol1 && domKra1 > gosKra1) {
			miljan +=4;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
		} else if ((miljanPk[i].innerText === 'xx' || miljanPk[i].innerText === 'XX') && domPol1 == gosPol1 && domKra1 == gosKra1) {
			miljan +=4;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
	} else if ((miljanPk[i].innerText === '1x' || miljanPk[i].innerText === '1X') && domPol1 > gosPol1 && domKra1 == gosKra1) {
			miljan +=4;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
	} else if ((miljanPk[i].innerText === '2x' || miljanPk[i].innerText === '2X') && domPol1 < gosPol1 && domKra1 == gosKra1) {
			miljan +=4;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
	} else if (miljanPk[i].innerText == 22 && domPol1 < gosPol1 && domKra1 < gosKra1) {
			miljan +=4;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
	} else if ((miljanPk[i].innerText === 'x2' || miljanPk[i].innerText === 'X2') && domPol1 == gosPol1 && domKra1 < gosKra1) {
			miljan +=4;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
	} else if (miljanPk[i].innerText == 12 && domPol1 > gosPol1 && domKra1 < gosKra1) {
			miljan +=4;
			document.getElementsByClassName("miljanPk")[i].style.background = "green";
}

	if (miljanGol[i].innerText === '0-2' && domKra1 + gosKra1 < 3) {
		miljan +=2;
		document.getElementsByClassName("miljanGol")[i].style.background = "green";
	} else if (miljanGol[i].innerText === '2-3' && (domKra1 + gosKra1 === 2 || domKra1 + gosKra1 === 3)) {
		miljan +=2;
		document.getElementsByClassName("miljanGol")[i].style.background = "green";
	} else if (miljanGol[i].innerText === '3+' && domKra1 + gosKra1 > 2) {
		miljan +=2;
		document.getElementsByClassName("miljanGol")[i].style.background = "green";
	}
}
}
return miljan;
}

function izracunajSkorLopetu(domPol, domKra, gosPol, gosKra, lopeKon, lopePk, lopeGol, lope) {
	for (let i = 0; i < brojUtakmica; i++) {
		let domPol1 = Number(domPol[i].innerText);
		let domKra1 = Number(domKra[i].innerText);
		let gosPol1 = Number(gosPol[i].innerText);
		let gosKra1 = Number(gosKra[i].innerText);
		if (i === 63) {
		if (lopeKon[i].innerText == 1 && domKra1 > gosKra1) {
			lope +=6;
			document.getElementsByClassName("lopeKon")[i].style.background = "green";
		} else if ((lopeKon[i].innerText == 'x' || lopeKon[i].innerText == 'X') && domKra1 === gosKra1) {
			lope +=6;
			document.getElementsByClassName("lopeKon")[i].style.background = "green";
		} else if (lopeKon[i].innerText == 2 && domKra1 < gosKra1) {
			lope +=6;
			document.getElementsByClassName("lopeKon")[i].style.background = "green";
		}

		if (lopePk[i].innerText == 11 && domKra1 > gosKra1 && domPol1 > gosPol1) {
			lope +=12;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
		} else if ((lopePk[i].innerText === 'x1' || lopePk[i].innerText === 'X1') && domPol1 === gosPol1 && domKra1 > gosKra1) {
			lope += 12;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
		} else if (lopePk[i].innerText == 21 && domPol1 < gosPol1 && domKra1 > gosKra1) {
			lope +=12;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
		} else if ((lopePk[i].innerText === 'xx' || lopePk[i].innerText === 'XX') && domPol1 == gosPol1 && domKra1 == gosKra1) {
			lope +=12;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
	} else if ((lopePk[i].innerText === '1x' || lopePk[i].innerText === '1X') && domPol1 > gosPol1 && domKra1 == gosKra1) {
			lope +=12;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
	} else if ((lopePk[i].innerText === '2x' || lopePk[i].innerText === '2X') && domPol1 < gosPol1 && domKra1 == gosKra1) {
			lope +=12;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
	} else if (lopePk[i].innerText == 22 && domPol1 < gosPol1 && domKra1 < gosKra1) {
			lope +=12;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
	} else if ((lopePk[i].innerText === 'x2' || lopePk[i].innerText === 'X2') && domPol1 == gosPol1 && domKra1 < gosKra1) {
			lope +=12;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
	} else if (lopePk[i].innerText == 12 && domPol1 > gosPol1 && domKra1 < gosKra1) {
			lope +=12;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
}

	if (lopeGol[i].innerText === '0-2' && domKra1 + gosKra1 < 3) {
		lope +=6;
		document.getElementsByClassName("lopeGol")[i].style.background = "green";
	} else if (lopeGol[i].innerText === '2-3' && (domKra1 + gosKra1 === 2 || domKra1 + gosKra1 === 3)) {
		lope +=6;
		document.getElementsByClassName("lopeGol")[i].style.background = "green";
	} else if (lopeGol[i].innerText === '3+' && domKra1 + gosKra1 > 2) {
		lope +=6;
		document.getElementsByClassName("lopeGol")[i].style.background = "green";
	}
} else if (i > 47) {
		if (lopeKon[i].innerText == 1 && domKra1 > gosKra1) {
			lope +=3;
			document.getElementsByClassName("lopeKon")[i].style.background = "green";
		} else if ((lopeKon[i].innerText == 'x' || lopeKon[i].innerText == 'X') && domKra1 === gosKra1) {
			lope +=3;
			document.getElementsByClassName("lopeKon")[i].style.background = "green";
		} else if (lopeKon[i].innerText == 2 && domKra1 < gosKra1) {
			lope +=3;
			document.getElementsByClassName("lopeKon")[i].style.background = "green";
		}

		if (lopePk[i].innerText == 11 && domKra1 > gosKra1 && domPol1 > gosPol1) {
			lope +=6;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
		} else if ((lopePk[i].innerText === 'x1' || lopePk[i].innerText === 'X1') && domPol1 === gosPol1 && domKra1 > gosKra1) {
			lope += 6;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
		} else if (lopePk[i].innerText == 21 && domPol1 < gosPol1 && domKra1 > gosKra1) {
			lope +=6;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
		} else if ((lopePk[i].innerText === 'xx' || lopePk[i].innerText === 'XX') && domPol1 == gosPol1 && domKra1 == gosKra1) {
			lope +=6;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
	} else if ((lopePk[i].innerText === '1x' || lopePk[i].innerText === '1X') && domPol1 > gosPol1 && domKra1 == gosKra1) {
			lope +=6;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
	} else if ((lopePk[i].innerText === '2x' || lopePk[i].innerText === '2X') && domPol1 < gosPol1 && domKra1 == gosKra1) {
			lope +=6;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
	} else if (lopePk[i].innerText == 22 && domPol1 < gosPol1 && domKra1 < gosKra1) {
			lope +=6;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
	} else if ((lopePk[i].innerText === 'x2' || lopePk[i].innerText === 'X2') && domPol1 == gosPol1 && domKra1 < gosKra1) {
			lope +=6;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
	} else if (lopePk[i].innerText == 12 && domPol1 > gosPol1 && domKra1 < gosKra1) {
			lope +=6;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
}

	if (lopeGol[i].innerText === '0-2' && domKra1 + gosKra1 < 3) {
		lope +=3;
		document.getElementsByClassName("lopeGol")[i].style.background = "green";
	} else if (lopeGol[i].innerText === '2-3' && (domKra1 + gosKra1 === 2 || domKra1 + gosKra1 === 3)) {
		lope +=3;
		document.getElementsByClassName("lopeGol")[i].style.background = "green";
	} else if (lopeGol[i].innerText === '3+' && domKra1 + gosKra1 > 2) {
		lope +=3;
		document.getElementsByClassName("lopeGol")[i].style.background = "green";
	}
}
else {
		if (lopeKon[i].innerText == 1 && domKra1 > gosKra1) {
			lope +=2;
			document.getElementsByClassName("lopeKon")[i].style.background = "green";
		} else if ((lopeKon[i].innerText == 'x' || lopeKon[i].innerText == 'X') && domKra1 === gosKra1) {
			lope +=2;
			document.getElementsByClassName("lopeKon")[i].style.background = "green";
		} else if (lopeKon[i].innerText == 2 && domKra1 < gosKra1) {
			lope +=2;
			document.getElementsByClassName("lopeKon")[i].style.background = "green";
		}

		if (lopePk[i].innerText == 11 && domKra1 > gosKra1 && domPol1 > gosPol1) {
			lope +=4;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
		} else if ((lopePk[i].innerText === 'x1' || lopePk[i].innerText === 'X1') && domPol1 === gosPol1 && domKra1 > gosKra1) {
			lope +=4;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
		} else if (lopePk[i].innerText == 21 && domPol1 < gosPol1 && domKra1 > gosKra1) {
			lope +=4;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
		} else if ((lopePk[i].innerText === 'xx' || lopePk[i].innerText === 'XX') && domPol1 == gosPol1 && domKra1 == gosKra1) {
			lope +=4;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
	} else if ((lopePk[i].innerText === '1x' || lopePk[i].innerText === '1X') && domPol1 > gosPol1 && domKra1 == gosKra1) {
			lope +=4;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
	} else if ((lopePk[i].innerText === '2x' || lopePk[i].innerText === '2X') && domPol1 < gosPol1 && domKra1 == gosKra1) {
			lope +=4;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
	} else if (lopePk[i].innerText == 22 && domPol1 < gosPol1 && domKra1 < gosKra1) {
			lope +=4;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
	} else if ((lopePk[i].innerText === 'x2' || lopePk[i].innerText === 'X2') && domPol1 == gosPol1 && domKra1 < gosKra1) {
			lope +=4;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
	} else if (lopePk[i].innerText == 12 && domPol1 > gosPol1 && domKra1 < gosKra1) {
			lope +=4;
			document.getElementsByClassName("lopePk")[i].style.background = "green";
}

	if (lopeGol[i].innerText === '0-2' && domKra1 + gosKra1 < 3) {
		lope +=2;
		document.getElementsByClassName("lopeGol")[i].style.background = "green";
	} else if (lopeGol[i].innerText === '2-3' && (domKra1 + gosKra1 === 2 || domKra1 + gosKra1 === 3)) {
		lope +=2;
		document.getElementsByClassName("lopeGol")[i].style.background = "green";
	} else if (lopeGol[i].innerText === '3+' && domKra1 + gosKra1 > 2) {
		lope +=2;
		document.getElementsByClassName("lopeGol")[i].style.background = "green";
	}
}
}
return lope;
}

gosim = izracunajSkorGosimu(domPol, domKra, gosPol, gosKra, gosimKon, gosimPk, gosimGol, gosim);
gospodja = izracunajSkorGospodji(domPol, domKra, gosPol, gosKra, gospodjaKon, gospodjaPk, gospodjaGol, gospodja);
gile = izracunajSkorGiletu(domPol, domKra, gosPol, gosKra, gileKon, gilePk, gileGol, gile);
bankar = izracunajSkorBankaru(domPol, domKra, gosPol, gosKra, bankarKon, bankarPk, bankarGol, bankar);
miljan = izracunajSkorMiljanu(domPol, domKra, gosPol, gosKra, miljanKon, miljanPk, miljanGol, miljan);
lope = izracunajSkorLopetu(domPol, domKra, gosPol, gosKra, lopeKon, lopePk, lopeGol, lope);

document.getElementById('#1').innerText = gosim;
document.getElementById('#2').innerText = gospodja;
document.getElementById('#3').innerText = gile;
document.getElementById('#4').innerText = bankar;
document.getElementById('#5').innerText = miljan;
document.getElementById('#6').innerText = lope;


function sortirajPlasman(tabela) {
	var sortiraj = true;
	while (sortiraj) {
		sortiraj = false;
		for (var i = 0; i < 5; i++) {
			var red = document.getElementsByClassName('menjaj');
			var celija = red[i].getElementsByTagName("td")[1];
			var celija2 = red[i + 1].getElementsByTagName("td")[1];

			if (Number(celija2.innerHTML) > Number(celija.innerHTML)) {
				red[i].parentNode.insertBefore(red[i + 1], red[i]);
				sortiraj = true;
				break;
		}
		}
	}
}

sortirajPlasman(tabela);

$('table').stickyTableHeaders();