import Button from "components/Button/Button";
import ButtonClose from "components/ButtonClose/ButtonClose";
import React from "react";
export interface ModalProps {
  id: string;
  renderButtonOpen?: React.ReactNode;
  modalTitle?: string;
  renderBody?: React.ReactNode;
  renderFooter?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  id,
  renderButtonOpen,
  renderFooter,
  modalTitle = "Modal Title",
  renderBody,
}) => {
  const _renderHeader = () => {
    return (
      <div className="flex items-start justify-between px-6 py-4 pb-3 border-b border-solid border-neutral-700">
        <div className="flex text-neutral-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          {modalTitle && (
            <h3 className="text-f5 font-bold text-black truncate">
              {modalTitle}
            </h3>
          )}
        </div>
        <ButtonClose modalToggleId={id} />
      </div>
    );
  };

  const _renderBody = () => {
    return (
      <div className="relative p-6 flex-auto">
        {renderBody || (
          <p className="my-4 leading-relaxed">
            I always felt like I could do anything. That’s the main thing people
            are controlled by! Thoughts- their perception of themselves! They're
            slowed down by their perception of themselves. If you're taught you
            can’t do anything, you won’t do anything. I was taught I could do
            everything.
          </p>
        )}
      </div>
    );
  };

  const _renderFooter = () => {
    if (renderFooter) {
      return renderFooter;
    }
    return (
      <div className="flex justify-end px-6 py-4 space-x-4 border-t border-solid border-neutral-700 rounded-b">
        <Button size="small" type="ghost" color="neutral" modalToggleId={id}>
          small button
        </Button>
        <Button size="small" modalToggleId={id}>
          small button
        </Button>
      </div>
    );
  };

  const _renderButtonOpen = () => {
    if (renderButtonOpen) {
      return renderButtonOpen;
    }
    return (
      <Button url="" size="small" modalToggleId={id}>
        Open regular modal
      </Button>
    );
  };
  return (
    <div>
      {_renderButtonOpen()}
      <div
        className="hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center"
        id={id}
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/* <!--content--> */}
          <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* <!--header--> */}
            {_renderHeader()}
            {/* <!--body--> */}
            {_renderBody()}
            {/* <!--footer--> */}
            {_renderFooter()}
          </div>
        </div>
      </div>
      <div
        className="hidden opacity-30 fixed inset-0 z-40 bg-black"
        id={`${id}-backdrop`}
        data-ttnc-modal-toggle={id}
      ></div>
    </div>
  );
};

export default Modal;
