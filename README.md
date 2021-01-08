# Distributed data parallel for Neural network training

This is a basic repository for demonstration on how to take advantage of multi-machines for distributed data parallel (DDP) training on a Neural network.

The implementation is based on *Pytorch*, specificially the module *torch.nn.parallel.DistributedDataParallel*: 
>"This container parallelizes the application of the given module by splitting the input across the specified devices by chunking in the batch dimension. The module is replicated on each machine and each device, and each such replica handles a portion of the input. During the backwards pass, gradients from each node are averaged."



## Frontend
First of all, you need to install Node.js which can be found at https://nodejs.org/en/
Second, on the terminal, run command:
```
npm install
```
to install all dependencies, and then run
```
npm start
```

## Backend
```
Please read Readme in backend directory for more information
```

## Project status and Roadmap
**TODO list:**
- Create a GUI to choose which model will be used
- Make it work on an network

## Author
Current author: 
- [Tran Khanh Tung](https://github.com/KhanhTungTran)
- [Tran Hoang Viet])(https://github.com/HoangViet144)

## References
- [Distributed data parallel training in Pytorch](https://yangkky.github.io/2019/07/08/distributed-pytorch-tutorial.html)
- [DISTRIBUTED DATA PARALLEL](https://pytorch.org/docs/master/notes/ddp.html)
- [React JS](https://reactjs.org)
