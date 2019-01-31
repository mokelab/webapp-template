interface IComponentHandler {
    upgradeElement(node: HTMLElement): void;
    downgradeElements(node: HTMLElement): void;
}
declare const componentHandler: IComponentHandler;

const mdl = (node: HTMLElement, ...args: any[]) => {
    componentHandler.upgradeElement(node);
    return {
        teardown: () => {
            componentHandler.downgradeElements(node);
        }
    };
};
export default mdl;
