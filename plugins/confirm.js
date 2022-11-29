$.confirm = function (options) {
  return new Promise((resolve, reject) => {
    const modal = $.modal({
      title: options.title,
      width: "400px",
      closeble: false,
      content: options.content,
      onClose() {
        modal.destroy();
      },
      footerBattons: [
        {
          text: "Отменить",
          type: "btn-secondary",
          handler() {
            modal.close();
            reject();
          },
        },
        {
          text: "Удалить",
          type: "btn-danger",
          handler() {
            modal.close();
            resolve();
          },
        },
      ],
    });

    setTimeout(() => modal.open(), 100);
  });
};
