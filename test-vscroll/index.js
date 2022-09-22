const theContent = document.getElementById('some-content');

// window.addEventListener('scroll', function()
// {
// 	const position = theContent.getBoundingClientRect();

// 	// checking whether fully visible
// 	if(position.top >= 0 && position.bottom <= window.innerHeight) {
// 		console.log('Element is fully visible in screen');
// 	}
// 	// checking for partial visibility
// 	else if(position.top < window.innerHeight && position.bottom >= 0) {
// 		console.log('Element is partially visible in screen');
// 	}
// });


const observer = new IntersectionObserver((entries) =>
{
    const [ entry ] = entries;
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if (entry.isIntersecting === true)
    {
		console.log('Element has just become visible in screen');
    }
    else
    {
		console.log('Element has just become invisible in screen');
    }
}, { threshold: 1 });

observer.observe(theContent);
