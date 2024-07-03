import { describe, expect, it } from "vitest";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { render } from "~/test-utils";
import BarebonesAccordion from ".";

describe("component", () => {
  describe("BarebonesAccordion", () => {
    it("should render correctly", () => {
      const { container } = render(<BarebonesAccordion data={[]} />);

      expect(container).toBeTruthy();
    });

    it('"Disable" displays correctly', async () => {
      render(<BarebonesAccordion data={[]} />);

      const enableButton = () => screen.queryByText("Enable", { exact: false });
      const disableButton = () =>
        screen.queryByText("Disable", { exact: false });

      expect(enableButton()).toBeInTheDocument();
      expect(disableButton()).not.toBeInTheDocument();

      await enableButton()?.click();

      expect(enableButton()).not.toBeInTheDocument();
      expect(disableButton()).toBeInTheDocument();
    });
  });

  it("click question and answer displays", async () => {
    render(
      <BarebonesAccordion
        data={[
          {
            id: 1,
            question: "question",
            answer: "answer",
          },
        ]}
      />,
    );

    const question = screen.getByText("question");
    const answer = () => screen.queryByText("answer");

    expect(question).toBeInTheDocument();
    expect(answer()).not.toBeInTheDocument();

    await question.click();

    expect(answer()).toBeInTheDocument();
  });

  it("click second question and first answer disappears", async () => {
    render(
      <BarebonesAccordion
        data={[
          {
            id: 1,
            question: "first question",
            answer: "first answer",
          },
          {
            id: 2,
            question: "second question",
            answer: "second answer",
          },
        ]}
      />,
    );

    const firstQuestion = screen.getByText("first question");
    const firstAnswer = () => screen.queryByText("first answer");
    const secondQuestion = screen.getByText("second question");
    const secondAnswer = () => screen.queryByText("second answer");

    expect(firstAnswer()).not.toBeInTheDocument();
    expect(secondAnswer()).not.toBeInTheDocument();

    await firstQuestion.click();

    expect(firstAnswer()).toBeInTheDocument();
    expect(secondAnswer()).not.toBeInTheDocument();

    await secondQuestion.click();
    await waitForElementToBeRemoved(firstAnswer);

    expect(firstAnswer()).not.toBeInTheDocument();
    expect(secondAnswer()).toBeInTheDocument();
  });

  it("click second question and first answer doesn't disappear", async () => {
    render(
      <BarebonesAccordion
        data={[
          {
            id: 1,
            question: "first question",
            answer: "first answer",
          },
          {
            id: 2,
            question: "second question",
            answer: "second answer",
          },
        ]}
      />,
    );

    const enableButton = screen.getByText("Enable", { exact: false });
    const firstQuestion = screen.getByText("first question");
    const firstAnswer = () => screen.queryByText("first answer");
    const secondQuestion = screen.getByText("second question");
    const secondAnswer = () => screen.queryByText("second answer");

    expect(firstAnswer()).not.toBeInTheDocument();
    expect(secondAnswer()).not.toBeInTheDocument();

    await enableButton.click();
    await firstQuestion.click();

    expect(firstAnswer()).toBeInTheDocument();
    expect(secondAnswer()).not.toBeInTheDocument();

    await secondQuestion.click();

    expect(firstAnswer()).toBeInTheDocument();
    expect(secondAnswer()).toBeInTheDocument();
  });

  it("double click question, single", async () => {
    render(
      <BarebonesAccordion
        data={[
          {
            id: 1,
            question: "question",
            answer: "answer",
          },
        ]}
      />,
    );

    const question = screen.getByText("question");
    const answer = () => screen.queryByText("answer");

    expect(answer()).not.toBeInTheDocument();

    await question.click();

    expect(answer()).toBeInTheDocument();

    await question.click();

    expect(answer()).toBeInTheDocument();
  });

  it("double click question, multiple", async () => {
    render(
      <BarebonesAccordion
        data={[
          {
            id: 1,
            question: "question",
            answer: "answer",
          },
        ]}
      />,
    );

    const enableButton = screen.getByText("Enable", { exact: false });
    const question = screen.getByText("question");
    const answer = () => screen.queryByText("answer");

    expect(answer()).not.toBeInTheDocument();

    await enableButton.click();
    await question.click();

    expect(answer()).toBeInTheDocument();

    await question.click();
    await waitForElementToBeRemoved(answer);

    expect(answer()).not.toBeInTheDocument();
  });
});
