function supportsTemplate() {
  return 'content' in document.createElement('template');
}

if (supportsTemplate()) {

	var t = document.querySelector('#mytemplate');
	// Populate the src at runtime.
	t.content.querySelector('img').src = 'profil.png';

	var clone = document.importNode(t.content, true);
	document.body.appendChild(clone);

} else {
  // Use old templating techniques or libraries.
}