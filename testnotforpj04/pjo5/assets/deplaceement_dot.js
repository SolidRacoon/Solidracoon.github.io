
		const dot = document.querySelectorAll(".dot");
        const dot_selected = document.querySelectorAll(".dot_selected");


        cg.forEach(element =>
		{
            element.addEventListener("click", () =>
			{
                if (nPage===4)
                    {
                        const newDotSelected = `dot${nPage}`;
                        const oldDotSelected = `dot1`;
                        document.getElementById(newDotSelected).classList.remove("dot");
                        document.getElementById(newDotSelected).classList.add("dot_selected");

                        document.getElementById(oldDotSelected).classList.remove("dot_selected");
                        document.getElementById(oldDotSelected).classList.add("dot");
                    }

                    else
                    {

                        const newDotSelected = `dot${nPage}`;
                        const oldDotSelected = `dot${nPage+1}`;
                        document.getElementById(newDotSelected).classList.remove("dot");
                        document.getElementById(newDotSelected).classList.add("dot_selected");

                        document.getElementById(oldDotSelected).classList.remove("dot_selected");
                        document.getElementById(oldDotSelected).classList.add("dot");
                    }
            });
        });


        cd.forEach(element =>
		{
			element.addEventListener("click", () =>
			{
                if (nPage===1)
                {
                    const newDotSelected = `dot${nPage}`;
                    const oldDotSelected = `dot4`;
                    document.getElementById(newDotSelected).classList.remove("dot");
                    document.getElementById(newDotSelected).classList.add("dot_selected");

                    document.getElementById(oldDotSelected).classList.remove("dot_selected");
                    document.getElementById(oldDotSelected).classList.add("dot");
                }

                else
                {
                const newDotSelected = `dot${nPage}`;
                    const oldDotSelected = `dot${nPage-1}`;
                    document.getElementById(newDotSelected).classList.remove("dot");
                    document.getElementById(newDotSelected).classList.add("dot_selected");

                    document.getElementById(oldDotSelected).classList.remove("dot_selected");
                    document.getElementById(oldDotSelected).classList.add("dot");
                }
			});
		});
