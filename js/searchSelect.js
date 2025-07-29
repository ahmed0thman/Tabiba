const searchSelectElements = Array.from(
  document.querySelectorAll(".select-search")
);

if (searchSelectElements.length > 0) {
  searchSelectElements.map((searchSelect) => {
    const btnClose = searchSelect.querySelector(".select-search-close");

    const details = searchSelect.querySelector("details");

    const searchSelectTrigger = searchSelect.querySelector(
      ".select-search-trigger"
    );
    const selectSearchInput = searchSelect.querySelector(
      ".select-search-input"
    );
    const selectSearchFilter = searchSelect.querySelector(
      ".select-search-filter"
    );
    const selectSearchOptions = Array.from(
      searchSelect.querySelectorAll(".select-search-option")
    );

    if (details && btnClose) {
      btnClose.addEventListener("click", (e) => {
        selectSearchFilter.value = "";
        details.removeAttribute("open");
        handleFilter(null);
      });
    }
    if (selectSearchOptions.length > 0) {
      selectSearchOptions.map((option) => {
        const optionValue = option.dataset.value;
        const optionText = option.textContent;
        option.addEventListener("click", (e) => {
          if (selectSearchInput) {
            selectSearchInput.value = optionValue;
          }
          selectSearchFilter.value = "";
          searchSelectTrigger.textContent = optionText;
        });
      });
    }

    if (selectSearchFilter) {
      selectSearchFilter.addEventListener("keyup", handleFilter);
      selectSearchFilter.addEventListener("change", handleFilter);
    }

    function handleFilter(e) {
      if (selectSearchOptions.length > 0) {
        const searchTerm = e.target.value.toLowerCase();
        selectSearchOptions.forEach((option) => {
          const optionText = option.textContent.toLowerCase();
          if (optionText.includes(searchTerm)) {
            option.style.display = "block";
          } else {
            option.style.display = "none";
          }
        });
      } else {
        const radioOptions = Array.from(
          searchSelect.querySelectorAll(".btn-option-radion")
        );

        if (radioOptions.length > 0) {
          radioOptions.forEach((radioOption) => {
            const label = radioOption.querySelector("label");
            const optionText = label.textContent.toLowerCase();
            if (e === null) {
              radioOption.style.display = "block";
              return;
            }
            const searchTerm = e.target.value.toLowerCase();
            if (optionText.includes(searchTerm)) {
              radioOption.style.display = "block";
            } else {
              radioOption.style.display = "none";
            }
          });
        }
      }
    }
  });
}
