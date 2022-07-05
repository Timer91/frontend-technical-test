import { render, waitFor, screen, act, within } from '@testing-library/react';
import axios, { AxiosResponse } from 'axios';
import ConversationProvider, { ConversationContext } from '../../context/conversationContext';
import { IConversation } from '../../types/conversation';
import Conversations from './Conversations';


describe("Conversations", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("Should render with empty element", async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({
            data: [] as IConversation[]
        } as AxiosResponse);

        await act(async () => {
            render(
                <ConversationProvider>
                    <Conversations />
                </ConversationProvider>
            );
        });

        expect(screen.getByText("No conversation found")).toBeInTheDocument();
    });

    test("Should render with one conversation", async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({
            data: [
                {
                    id: 1,
                    recipientNickname: "Jeremie",
                    lastMessageTimestamp: 1656941835
                }
            ] as IConversation[]
        } as AxiosResponse);

        await act(async () => {
            render(
                <ConversationProvider>
                    <Conversations />
                </ConversationProvider>
            );
        });

        expect(screen.getAllByTestId('conversationItem')).toHaveLength(1);
    });
});
