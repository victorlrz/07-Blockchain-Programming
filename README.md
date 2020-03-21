# TD07Blockchain (Incomplet)

Vous trouverez le contrat dans "\contract\MyContract"

L'ensemble des codes se trouve ensuite dans "\my-app\src\App.js" et "\my-app\src\pages"

Pour réaliser les différentes pages, nous avons utilisé react-router. 
Nous avons ensuite déployé le contrat en suivant ces étapes :
 *truffle networks --ganache
 *let instance = await MyContract.deployed()
 *let account = web3.eth.getAccounts()

Il faut bien récupérer l'addresse du contrat et son API pour déployer correctement le contrat sur React avec web3JS.

Nous pouvons interragir avec le contrat facilement et tout semble fonctionner correctement en local sur ganache et truffle.
Nous avons rencontré des problèmes pour interragir avec le contrat sur React avec web3.JS nottament pour les fonctions héritées de ERC720, balanceOf et ownerOf. 

Nous recevions l'erreur ("this function doesn't exist"), j'ai voulu forcer la chose en déclarant des fonctions _ownerOf et _balanceOf dans MyContrat, sans succès.

Le router fonctionne sans problèmes, les fonctions pour récupérer chainId, lastBlockNumber, token registry name et token number aussi.
Nous n'avons pas réussi aussi à afficher la liste des comptes depuis React avec la fonction web3.eth.getAccounts().

Alors que la fonction web3.eth.getBalance(address) retourne la bonne balance pour les comptes ganaches dans la console.


