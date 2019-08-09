import { Test, TestingModule } from '@nestjs/testing';
import { FetchController } from './fetch.controller';

describe('Fetch Controller', () => {
  let controller: FetchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FetchController],
    }).compile();

    controller = module.get<FetchController>(FetchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
