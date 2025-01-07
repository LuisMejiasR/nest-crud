import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { IProduct } from "./interfaces/product.interface";
import { CreateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectModel("Product") private readonly productModel: Model<IProduct>) {}

    async getProducts(): Promise<IProduct[]> {
        const products = await this.productModel.find();
        return products;
    }

    async getProduct(productID: string): Promise<IProduct> {
        const product = await this.productModel.findById(productID);
        return product;
    }

    async createProduct(createProductDTO: CreateProductDTO): Promise<IProduct> {
        const newProduct = new this.productModel(createProductDTO);
        return await newProduct.save();
    }

    async deleteProduct(productID: string): Promise<IProduct> {
        const deletedProduct = await this.productModel.findByIdAndDelete(productID);
        return deletedProduct;
    }

    async updateProduct(productID: string, createProductDTO :CreateProductDTO): Promise<IProduct> {
        const updatedProduct = await this.productModel.findByIdAndUpdate(productID,
            createProductDTO, {new: true});
        return updatedProduct;
    }
}
