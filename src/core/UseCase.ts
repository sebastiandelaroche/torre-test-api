export interface UseCase<IInput, IOutput> {
  execute(data?: IInput): Promise<IOutput> | IOutput;
}
