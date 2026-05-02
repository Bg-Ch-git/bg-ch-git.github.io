/**
 * Table with comments
 */

export function interactiveTable() {
  const wrappers = document.querySelectorAll('.course-table-wrapper');

  wrappers.forEach((wrapper) => {
    const rows = wrapper.querySelectorAll('.course-row');
    const details = wrapper.querySelectorAll('.course-details');
    const details_d = wrapper.querySelectorAll('.course-details-d');

    rows.forEach((row) => {
      row.addEventListener('click', () => {
        const id = row.dataset.id;

        // закрыть все
        details.forEach((d) => {
          if (d.dataset.id !== id) d.classList.remove('show');
        });
        details_d.forEach((d) => {
          if (d.dataset.id !== id) d.classList.remove('show');
        });

        // переключить текущий
        const current = wrapper.querySelector(
          '.course-details[data-id="' + id + '"]'
        );
        if (!current.classList.contains('show')) {
          const current_d = wrapper.querySelector(
            '.course-details-d[data-id="' + id + '"]'
          );
          current_d?.classList.add('show');
          current_d?.addEventListener('click', (e) => {
            if (e.target === current_d) {
              current_d.classList.remove('show');
            }
          });
        }
        current.classList.toggle('show');
      });
    });
  });
}
