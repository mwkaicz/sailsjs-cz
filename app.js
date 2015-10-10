/**
 * app.js
 *
 * Použijte `app.js` pro spuštění vaši aplikace bez příkazu `sails lift`.
 * Pro spuštění serveru, zadejte příkaz: `node app.js`.
 *
 * Toto je šikovné v situacích, kde sails CLI není zrovna důležitý či užitečný.
 *
 * Například:
 *   => `node app.js`
 *   => `forever start app.js`
 *   => `node debug app.js`
 *   => `modulus deploy`
 *   => `heroku scale`
 *
 *
 * Jsou podporovány stále ty samé argumenty, např.:
 * `node app.js --silent --port=80 --prod`
 */

// Ověřte si, že jste ve složce s projektem, tudíž všechny relativní složky fungují jak očekáváme,
// bez ohledu na to, kde zrovna aktuálně aplikaci nahazujeme.
process.chdir(__dirname);

// Ověřování kde by se mohl 'sails' nacházet:
(function() {
  var sails;
  try {
    sails = require('sails');
  } catch (e) {
    console.error('Pro běh aplikace za použití `node app.js`, obvykle potřebujeme mít verzi `sails` nainstalovanou ve stejné složce.');
    console.error('K tomu potřebujeme zavolat příkaz `npm install sails`');
    console.error('');
    console.error('Jako alternativa, pokud máte sails nainstalován globálně  (použil jste příkaz `npm install -g sails`), můžete použít příkaz `sails lift`.');
    console.error('Když spustíte aplikaci příkazem `sails lift`, vaše aplikace bude stále používat složku `./node_modules/sails` pokud existuje,');
    console.error('pokud však ne, aplikace místo toho poběží pomocí globálně nainstalovaného sailsu!');
    return;
  }

  // Pokud o získání `rc`
  var rc;
  try {
    rc = require('rc');
  } catch (e0) {
    try {
      rc = require('sails/node_modules/rc');
    } catch (e1) {
      console.error('Nelze nalézt: `rc`.');
      console.error('Váš `.sailsrc` soubor bude ignorován.');
      console.error('Pro vyřešení tohoto problému, spusťe příkaz:');
      console.error('npm install rc --save');
      rc = function () { return {}; };
    }
  }


  // Spuštění serveru
  sails.lift(rc('sails'));
})();
